// import { db } from "@/lib/db";
// import { EditForm } from "@/components/storefront/EditForm";
// import { notFound } from "next/navigation";
// import { unstable_noStore as noStore } from "next/cache";
// import { products } from "@/lib/schema";

// async function getData(productId: string) {
//   const data = await db
//   .select()
//   .from(products)
//   .where({
//       id: productId,
//     });

//   if (!data) {
//     return notFound();
//   }

//   return data;
// }

// export default async function EditRoute({
//   params,
// }: {
//   params: { id: string };
// }) {
//   noStore();
//   const data = await getData(params.id);
  
//   return <EditForm data={data} />;
// }
