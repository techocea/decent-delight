import React from "react";

import MostDelicious from "@/components/MostDelicious";
import { getLatestProducts } from "@/lib/actions/product.actions";


const Home = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className="space-y-8 h-screen p-10">
      
      <MostDelicious title="Latest Products" data={latestProducts} />
    </div>
  );
};

export default Home;
