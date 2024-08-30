import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-4 py-10 lg:px-16 lg:py-20">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/about-img.svg"
          width={386}
          height={487}
          alt="cake delivery website"
          className="max-md:w-[275px] max-md:h-auto"
        />
        <div className="flex flex-col text-center sm:text-center md:text-center lg:text-start mt-10">
          <h1 className="font-bold text-2xl text-primary">About Us</h1>
          <p className="text-gray-500">
            Welcome to Decent Delight, where indulgence meets sophistication. At
            Decent Delight, we believe in redefining decadence with every bite.
            Our premium bakery specializes in crafting exquisite and unique
            confections that are as delightful to the eye as they are to the
            palate.
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-center md:text-center lg:text-start mt-10">
          <h1 className="font-bold text-2xl text-primary">Our Story</h1>
          <p className="text-gray-500">
            Founded with a passion for baking and an eye for detail, Decent
            Delight began as a dream to create not just desserts, but memorable
            experiences. Each creation is a testament to our commitment to
            quality, artistry, and the joy of celebration. From our signature
            pastries to our custom celebration cakes, we strive to bring a touch
            of elegance and luxury to every occasion.
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-center md:text-center lg:text-start mt-10">
          <h1 className="font-bold text-2xl text-primary">Our Philosophy</h1>
          <p className="text-gray-500">
            At Decent Delight, we believe that every sweet moment should be
            savored. Our philosophy is simple: use the finest ingredients,
            combine them with meticulous craftsmanship, and present them with
            unparalleled style. We are dedicated to pushing the boundaries of
            traditional baking by incorporating innovative flavors and designs,
            all while maintaining the highest standards of quality.
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-center md:text-center lg:text-start mt-10">
          <h1 className="font-bold text-2xl text-primary">Join Our Journey</h1>
          <p className="text-gray-500">
            We invite you to join us on this delicious journey. Whether you are
            looking to celebrate a special occasion or simply indulge in a
            moment of sweetness, Decent Delight is here to make every moment
            memorable. Follow us on our social media channels to stay updated
            with our latest creations, special offers, and behind-the-scenes
            glimpses of our baking artistry.
          </p>
        </div>
      </div>
    </main>
  );
}
