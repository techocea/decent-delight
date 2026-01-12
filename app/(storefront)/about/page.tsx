import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ABOUT_US } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:py-10 lg:px-8 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 my-10">
          {ABOUT_US.map((item) => (
            <Card key={item.id} className="bg-white hover:shadow-accent-foreground/20">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
