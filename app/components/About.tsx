import Image from "next/image";

export default function About() {
    return (
        <main className="bg-secondary-100 flex items-center justify-center py-10 lg:py-16">
            <div className="flex max-md:flex-col items-center justify-center gap-6">
                <Image src="/about-img.svg" width={386} height={487} alt="cake delivery website" />
                <div className="flex flex-col gap-2 sm:max-w-xl text-justify">
                    <h1 className="font-bold text-2xl text-primary">Meet Chanaka & Hansika</h1>
                    <p className="text-primary text-sm">Meet Chanaka and Hansika, the culinary dream team behind a delectable array of artisanal treats. With a shared passion for baking, they infuse every creation with a blend of creativity and love. From intricately decorated cakes to melt-in-your-mouth pastries, their dedication to quality and flavor shines through in every bite. Join them on a journey of culinary delight that's sure to leave your taste buds wanting more. <br /><br />The dynamic duo behind the oven, are on a mission to spread joy, one baked good at a time. Their kitchen is a hub of innovation and experimentation, where traditional recipes meet modern twists. Whether it's a classic chocolate chip cookie or an exotic cake inspired by their travels, each creation tells a story of passion and dedication. Indulge in the magic of Chanaka and Hansika's baking wizardry and let your taste buds embark on a flavorful adventure.</p>
                </div>
            </div>
        </main>
    )
}