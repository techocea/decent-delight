import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { addresses, orderItems, orders, products, users } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";
import { Check } from "lucide-react";

async function getData() {
  const data = await db
    .select()
    .from(orders)
    //left join - one order can have many items (one-to-many)
    .leftJoin(orderItems, eq(orders.id, orderItems.orderId))
    //join products for the item details
    .innerJoin(products, eq(orderItems.productId, products.id))
    .leftJoin(users, eq(orders.userId, users.id))
    .innerJoin(addresses, eq(orders.id, addresses.orderId))
    .orderBy(desc(orders.createdAt));
  return data;
}

const OrdersPage = async () => {
  const data = await getData();
  // console.log(data.length);

  return (
    <Card className="bg-white">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store!</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              {/* <TableHead align="justify">Date</TableHead> */}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((order) => (

              <TableRow key={order.orders.id}>
                <TableCell>{order.addresses.firstName}  {order.addresses.lastName}</TableCell>
                <TableCell>{order.products.name}</TableCell>
                <TableCell>{order.orders.paymentMode}</TableCell>
                <TableCell>{order.orders.status}</TableCell>
                <TableCell>Rs {order.orders.totalPrice}</TableCell>
                {/* <TableCell>{new Date(format(order.orders.createdAt, "MM dd"))}</TableCell> */}
                <TableCell align="right">
                  <Check className="text-green-500" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersPage;
