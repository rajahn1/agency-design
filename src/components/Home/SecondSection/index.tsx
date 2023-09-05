import Image from "next/image";
import HowWeWork from "./HowWeWork";
import VideoReel from "./VideoReel";
import HomeFeatures from "./HomeFeatures";
import HomeFeaturesRow from "./HomeFeaturesRow";

export default function SecondSection() {
    return (
        <section className="flex flex-col gap-24 bg-orange-light">
            <div className="py-16 flex justify-between border-[#F3D1BF] border-b">
                <Image
                    src={"/home/marks/DigitalSide.svg"}
                    width={120}
                    height={50}
                    alt="Digital Side Mark Logo"
                />
                <Image
                    src={"/home/marks/Vortex.svg"}
                    width={90}
                    height={50}
                    alt="Vortex Mark Logo"
                />
                <Image
                    src={"/home/marks/TravelExplorer.svg"}
                    width={90}
                    height={50}
                    alt="Travel Explorer Mark Logo"
                />
                <Image
                    src={"/home/marks/Fuzion.svg"}
                    width={90}
                    height={50}
                    alt="Fuzion Mark Logo"
                />
                <Image
                    src={"/home/marks/MediaFury.svg"}
                    width={110}
                    height={50}
                    alt="Media Fury Mark Logo"
                />
            </div>
            <div className="flex items-center gap-24">
                <div className="container-left">
                    <Image
                        src={"/home/hero-image-about.svg"}
                        width={500}
                        height={400}
                        alt="a montage with images, with a office on the center, a white man with glasses with a circle red background"
                    />
                </div>
                <div className="flex flex-col gap-4 container-right">
                    <span className="subtitle"> ABOUT</span>
                    <h2 className="title ">
                        An Experience
                        <br />
                        Design Agency
                    </h2>
                    <span className="content">
                        Provides a full service range
                    </span>
                    <p className="paragraph text-[0.81rem]">
                        Ability to put themselves in the merchant&apos;s shoes.
                        It is <br />
                        meant to partner on the long run, and work as an
                        extension
                        <br /> of the merchant&apos;s team.
                    </p>
                    <div className="flex items-center gap-8 mt-2">
                        <button className="button-animation-light">
                            ABOUT US
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-16 border-[#F3D1BF] border text-text-dark">
                <div className="flex flex-1 flex-col gap-4 p-8">
                    <span className="font-extrabold text-3xl">42%</span>
                    <span>Years of experience</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8 border-l border-[#F3D1BF]">
                    <span className="font-extrabold text-3xl">73+</span>
                    <span>Agency Members</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8 border-l border-[#F3D1BF]">
                    <span className="font-extrabold text-3xl">5.000</span>
                    <span>Projects Complete</span>
                </div>
            </div>
            <HowWeWork />
            <VideoReel />
            <HomeFeatures />
            <HomeFeaturesRow />
        </section>
    );
}
