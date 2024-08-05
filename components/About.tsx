import Image from "next/image";

export default function About() {
    return (
        <main className="bg-white flex items-center justify-center py-16 lg:py-24 lg:px-24 2xl:px-48 2xl:py-32 max-md:px-10">
            <div className="flex flex-col items-start justify-center lg:max-w-7xl 2xl:max-w-screen-2xl w-full gap-10">
                <div className="lg:flex gap-10 lg:items-start lg:justify-between w-full">
                    <Image
                        src="/about-img.svg"
                        width={386}
                        height={487}
                        alt="cake delivery website"
                        className="max-md:w-[275px] max-md:h-auto"
                    />
                    <div className="text-justify flex lg:min-w-4xl flex-col gap-8 mt-16 lg:mt-0">
                        <div>
                            <h1 className="font-bold text-3xl lg:text-4xl text-primary max-md:text-center pb-4 ">
                                Our Story
                            </h1>
                            <p className="text-primary text-lg">
                                Founded with a passion for baking and an eye for detail, Decent
                                Delight began as a dream to create not just desserts, but
                                memorable experiences. Each creation is a testament to our
                                commitment to quality, artistry, and the joy of celebration. From
                                our signature pastries to our custom celebration cakes, we strive
                                to bring a touch of elegance and luxury to every occasion.
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl lg:text-4xl text-primary max-md:text-center pb-4 ">
                                Join Our Journey
                            </h1>
                            <p className="text-primary text-lg">
                                We invite you to join us on this delicious journey. Whether you are looking to celebrate a special occasion or simply indulge in a moment of sweetness, Decent Delight is here to make every moment memorable. Follow us on our social media channels to stay updated with our latest creations, special offers, and behind-the-scenes glimpses of our baking artistry.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
