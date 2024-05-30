import { BoxIcon, CakeIcon, TruckIcon } from "lucide-react";

export default function Features() {
    return (
        <main className="bg-primary-100 mx-auto flex items-center justify-center h-[50vh]">
            <div className="flex max-md:flex-col items-center justify-evenly w-full">
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
        <div className="flex flex-col gap-2.5 w-[270px]">
            <span className="text-primary">{icon}</span>
            <h2 className="text-primary font-semibold text-2xl sm:text-lg">{title}</h2>
            <p className="text-primary">{description}</p>
        </div>
    );
}
