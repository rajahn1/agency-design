export default function HowWeWork() {
    return (
        <section className="flex text-text-dark gap-24 pb-16 border-b border-[#F3D1BF]">
            <div className="flex flex-col gap-8">
                <span className="text-text-accent text-xs tracking-[0.2rem]">
                    HOW WE WORK
                </span>
                <h2 className="font-extrabold leading-tight text-4xl">
                    Making Your Projects
                    <br />
                    Look Awesome
                </h2>
                <p className="text-sm text-text-dark-gray leading-normal">
                    Technical skills, design, business understanding, ability to
                    <br />
                    put themselves in the merchant&apos;s shoes.
                </p>
                <span className="text-sm">Read More</span>
            </div>
            <div className="flex flex-col gap-8 mt-20 font-bold">
                <div className="flex gap-12 items-center">
                    <span className="text-6xl font-extrabold">1</span>
                    <span className="">Full service range including</span>
                </div>
                <div className="flex gap-12 items-center">
                    <span className="text-6xl font-extrabold">2</span>
                    <span>Technical skills, design, business</span>
                </div>
                <div className="flex gap-12 items-center">
                    <span className="text-6xl font-extrabold">3</span>
                    <span>Themselves in the merchant&apos;s</span>
                </div>
            </div>
        </section>
    );
}
