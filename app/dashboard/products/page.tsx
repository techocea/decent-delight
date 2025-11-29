import prisma from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import { PRODUCTS } from "@/lib/constants";

// async function getData() {
//   const data = await prisma.product.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   return data;
// }

export default async function ProductsRoute() {
  noStore();
  // const data = await getData();
  return (
    <div className="flex flex-col gap-6 py-6">
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
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PRODUCTS.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="w-28 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
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
                  <TableCell>$ {item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/products/${item.id}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/products/${item.id}/delete`}>
                            Delete
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
