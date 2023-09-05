import Image from "next/image";
export default function HomeFeaturesRow() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
                <span className="subtitle"> FEATURES</span>
                <span className="content">
                    Long run, and work as an extension <br /> of the
                    merchant&apos;s team.
                </span>
                <span className="content text-sm"> Read More</span>
            </div>
            <div className="flex justify-center items-end">
                <div className="flex flex-col gap-4 bg-white px-6 py-8 border-[#F3D1BF] border shadow-lg">
                    <Image
                        src={"/home/professional.svg"}
                        alt="icon"
                        height={80}
                        width={80}
                    />
                    <span className="content font-bold">Professional</span>
                    <p className="paragraph text-sm">
                        Full service range including <br /> technical skills,
                        design.
                    </p>
                </div>
                <div className="flex gap-4 flex-col h-full justify-end border-[#F3D1BF] border px-6 pt-16 pb-8">
                    <span className="content font-bold">Accessibility</span>
                    <p className="paragraph text-sm">
                        Business understanding,
                        <br />
                        ability to put themselves.
                    </p>
                </div>
            </div>
        </div>
    );
}
