"use client";

import { useEffect, useState } from "react";

import { columns } from "../_components/CollectionColumns";
import { DataTable } from "../_components/DataTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Collections() {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);

    const getCollections = async () => {
        try {
            const res = await fetch("/api/collections", {
                method: "GET",
            });
            const data = await res.json();
            setCollections(data);
            setLoading(false);
        } catch (error) {
            console.log("[collections_GET]", error);
        }
    };
    useEffect(() => {
        getCollections();
    }, []);

    // console.log(collections);

    return (
        <>
            <div className="m-4">
                <div className="flex items-center justify-between w-full mb-3 xl:mb-4">
                    <h2 className="text-2xl font-bold">Collections</h2>
                    <Button variant="default" className="flx items-center gap-2">
                        <Plus />Create Collection
                    </Button>
                </div>
                <Separator className="bg-gray-500 mt-4 mb-7" />
                <DataTable columns={columns} data={collections} />
            </div>
        </>
    );
}
