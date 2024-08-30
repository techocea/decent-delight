import DashboardStats from "@/components/dashboard/DashboardStats";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <>
      <DashboardStats />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2 ">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Transactions from your recents</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          {/* <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex w-10 h-10">
                <AvatarFallback>DD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Brightly Dunsford</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+LKR 2000.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex w-10 h-10">
                <AvatarFallback>DD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Brightly Dunsford</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+LKR 2000.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex w-10 h-10">
                <AvatarFallback>DD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Brightly Dunsford</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+LKR 2000.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex w-10 h-10">
                <AvatarFallback>DD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Brightly Dunsford</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+LKR 2000.00</p>
            </div>
          </CardContent> */}
        </Card>
      </div>
    </>
  );
}
