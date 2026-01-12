import { db } from "@/lib/db";
import fs from "fs";
import path from "path";
import * as models from "@/lib/schema";

function findModel(name: string) {
  const lower = name.toLowerCase();
  const foundKey = Object.keys(models).find(
    (key) => key.toLowerCase() === lower
  );
  return foundKey ? (models as any)[foundKey] : null;
}

async function deleteAllData(files: string[]) {
  for (const file of files) {
    const name = path.basename(file, path.extname(file));
    const model = findModel(name);
    if (!model) {
      console.error(`Model ${name} not found.`);
      continue;
    }
    await db.delete(model);
    console.log(`🧹 Cleared data from ${name}`);
  }
}

function normalizeData(data: Record<string, any>) {
  const normalized: Record<string, any> = { ...data };

  // Convert snake_case timestamps to camelCase
  if (data.created_at) {
    normalized.createdAt = new Date(data.created_at);
    delete normalized.created_at;
  }

  if (data.updated_at) {
    normalized.updatedAt = new Date(data.updated_at);
    delete normalized.updated_at;
  }

  return normalized;
}

async function main() {
  const dataDirectory = path.join(__dirname, "seed");
  const orderedFileNames = ["products.json",];

  // Step 1: clear tables
  await deleteAllData(orderedFileNames);

  // Step 2: insert historical data
  for (const file of orderedFileNames) {
    const name = path.basename(file, path.extname(file));
    const filePath = path.join(dataDirectory, file);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const model = findModel(name);

    if (!model) {
      console.error(`No db model matches the file name: ${file}`);
      continue;
    }

    const formattedData = jsonData.map((item: any) => normalizeData(item));
    await db.insert(model).values(formattedData);

    console.log(`🌱 Seeded ${name} (${formattedData.length} records)`);
  }

  console.log("✅ Seeding complete.");
}

main().catch((e) => {
  console.error("❌ Error seeding database:", e);
  process.exit(1);
});