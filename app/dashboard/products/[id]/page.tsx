import { db } from "@/lib/db";
import EditForm from "@/components/dashboard/EditForm";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { products } from "@/lib/schema";
import { eq } from "drizzle-orm";

async function getData(productId: string) {
  const data = await db
    .select()
    .from(products)
    .where(eq(products.id, productId))
    .limit(1);

  if (!data || data.length === 0) {
    return notFound();
  }

  return data[0];
}

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  noStore();
  const awaitedParams = (await params).id;
  const data = await getData(awaitedParams);

  return <EditForm data={data} />;
}
