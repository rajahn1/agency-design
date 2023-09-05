import Image from "next/image";

export default function HomeFeatures() {
    return (
        <section className="flex gap-24 mt-24 items-center">
            <div className="flex flex-col gap-2">
                <span className="subtitle">FEATURES</span>
                <h2 className="title text-5xl py-4">
                    Give Your Site
                    <br />A New Look
                </h2>
                <span className="content mb-4 text-base">
                    Service range including technical skills, design, business
                    understanding.
                </span>
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/home/checkIcon.svg"}
                        alt="check icon with red background"
                        height={30}
                        width={30}
                    />
                    <p className="paragraph text-xs">
                        Range including technical skills
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/home/checkIcon.svg"}
                        alt="check icon with red background"
                        height={30}
                        width={30}
                    />
                    <p className="paragraph text-xs">Business understanding</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/home/checkIcon.svg"}
                        alt="check icon with red background"
                        height={30}
                        width={30}
                    />
                    <p className="paragraph text-xs">Partner on the long run</p>
                </div>
            </div>
            <div>
                <Image
                    height={500}
                    width={500}
                    src={"/home/hero-features.svg"}
                    alt="collection of images, one is face of a white man with a background purple, and in the middle another image 3 items: airpods, phone and a drink"
                />
            </div>
        </section>
    );
}
