import prisma from "@/app/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PartyPopper, ShoppingBagIcon, User } from "lucide-react";

async function getData() {
  const user = await prisma.user.findMany({
    select: {
      id: true,
    },
  });
  const products = await prisma.product.findMany({
    select: {
      id: true,
    },
  });
  return { user, products };
}

export default async function DashboardStats() {
  const { user, products } = await getData();
  return (
    <div className="grid gap- md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Revenue</CardTitle>
          <span className="text-green-500 font-bold">LKR</span>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl text-red-500">Rs 72,000.00</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
          <ShoppingBagIcon className="w-4 h-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl text-red-500">+10</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Products</CardTitle>
          <PartyPopper className="w-4 h-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl text-red-500">{products.length}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Users</CardTitle>
          <User className="w-4 h-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl text-red-500">{user.length}</p>
        </CardContent>
      </Card>
    </div>
  );
}
