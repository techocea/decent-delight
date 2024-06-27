import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function Delete() {
    return <Button variant="destructive">
        <Trash className="w-4 h-4" />
    </Button>
}