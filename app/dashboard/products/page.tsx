import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/lib/db";
import { products } from "@/lib/schema";
import { desc } from "drizzle-orm";

async function getData() {
  const data = await db
    .select()
    .from(products)
    .orderBy(desc(products.createdAt));
  return data;
}

export default async function ProductsRoute() {
  noStore();
  const data = await getData();

  return (
    <div className="flex flex-col gap-6 py-6 sm:px-4 md:px-8 lg:px-10 w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="font-bold text-2xl">Products</h2>
          <p className="text-muted-foreground text-sm">Manage your products </p>
        </div>
        <Button asChild className="flex items-center gap-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="w-4 h-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <Card className="mt-4 bg-white">
        <CardContent className="pb-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="w-28 h-24 shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        width={104}
                        height={96}
                        className="object-cover w-full h-full"
                        alt="product image"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>LKR {item.price}</TableCell>
                  <TableCell>{item.weight}</TableCell>
                  <TableCell align="center">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/products/${item.id}`}>
                        <SquarePen className="text-blue-500" />
                      </Link>

                      <Link href={`/dashboard/products/${item.id}/delete`}>
                        <Trash2 className="text-red-500" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
