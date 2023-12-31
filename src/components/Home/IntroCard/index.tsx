"use client";
import Image from "next/image";

export default function IntroCard() {
    return (
        <section className="flex justify-center gap-24 pt-24 pb-16 bg-blue-dark text-text-light ">
            <div
                className="flex gap-6 flex-col container-left"
                style={{
                    backgroundImage: "url('/home/star.svg')",
                    backgroundSize: "30%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "72% 4%",
                }}
            >
                <span className="subtitle"> MODERN STUDIO</span>
                <h2 className="title text-6xl text-text-light">
                    We&apos;re Help
                    <br />
                    To Build Your
                    <br />
                    Dream Project
                </h2>
                <p className="text-sm text-text-light-gray leading-normal">
                    Agency provides a full service range including technical
                    <br />
                    skills, design, business understanding.
                </p>
                <div className="flex items-center gap-8 mt-2">
                    <button className="contact-button"> HOW WE WORK</button>
                    <a className="font-normal text-sm cursor-pointer hover:underline">
                        Contact us
                    </a>
                </div>
                <div className="flex items-center mt-16 gap-2">
                    <Image
                        src={"/home/avatar.svg"}
                        width={42}
                        height={42}
                        alt="mans face with a pink background"
                    />
                    <div className="flex flex-col justify-center text-xs">
                        <span className="text-text-light-gray">
                            &quot;Put themselves in the merchant&apos;s
                            shoes&quot;
                        </span>
                        <span className="ml-1">Meta Inc.</span>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <Image
                    src={"/home/hero-card.svg"}
                    width={430}
                    height={350}
                    alt="compilation of various images, laptop with purple background, a skeleton, a image of a woman smiling with yellow background, with two symbols above her, one is three stars and the other its a scratched cloud"
                />
            </div>
        </section>
    );
}
