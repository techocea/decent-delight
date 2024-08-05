import { BoxIcon, CakeIcon, TruckIcon } from "lucide-react";

export default function Features() {
  return (
    <main className="bg-secondary mx-auto flex items-center justify-center lg:h-80 h-full py-16">
      <div className="flex max-md:flex-col items-center justify-evenly gap-8 w-full">
        <FeaturesCard
          icon=<CakeIcon size={75} />
          title="Choose your favorite flavor and order"
          description="We have a big collection.Select your favorite"
        />
        <FeaturesCard
          icon=<BoxIcon size={75} />
          title="We pack with care before send"
          description="We ensure careful packing before sending."
        />
        <FeaturesCard
          icon=<TruckIcon size={75} />
          title="On time delivery to your doorsteps"
          description="Timely delivery right to your doorstep."
        />
      </div>
    </main>
  );
}

function FeaturesCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2.5 w-[300px] max-md:text-center max-md:items-center">
      <span className="text-accent">{icon}</span>
      <h2 className="text-accent font-semibold text-2xl max-md:text-sm">
        {title}
      </h2>
      <p className="text-accent max-md:text-sm">{description}</p>
    </div>
  );
}
