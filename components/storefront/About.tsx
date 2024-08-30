import Image from "next/image";

export default function About() {
  return (
    <main className="bg-accent flex items-center justify-center py-16 lg:py-24 lg:px-24 2xl:px-48 2xl:py-32 max-md:px-10">
      <div className="flex flex-col items-start justify-center lg:max-w-7xl 2xl:max-w-screen-2xl w-full gap-10">
        <div className="lg:flex gap-10 lg:items-start lg:justify-center w-full">
          <Image
            src="/about-img.svg"
            width={386}
            height={487}
            alt="cake delivery website"
            className="max-md:w-[275px] max-md:h-auto"
          />
          <div className="text-justify flex lg:max-w-lg flex-col mt-16 lg:mt-0 gap-10">
            
              <h1 className="font-bold text-3xl lg:text-4xl text-primary max-md:text-center">
                What We Offer
              </h1>
              <p className="text-primary">
                <span className="font-bold">Signature Pastries:</span>
                <br /> Our collection of signature pastries is crafted with
                precision and passion, offering a delightful blend of classic
                and contemporary flavors.
              </p>
              <p className="text-primary">
                <span className="font-bold">Exclusive Collections: </span>
                <br /> Explore our seasonal and limited-edition collections,
                featuring exclusive treats that capture the essence of each
                season.
              </p>
              <p className="text-primary">
                <span className="font-bold">Custom Celebration Cakes: </span>
                <br />
                Celebrate your special moments with our bespoke cakes, designed
                to reflect your unique style and taste.
              </p>
           
          </div>
        </div>
      </div>
    </main>
  );
}
