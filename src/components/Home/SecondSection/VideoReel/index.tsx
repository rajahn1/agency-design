export default function VideoReel() {
    return (
        <section className="flex gap-24">
            <video className="w-[45%] h-72 rounded shadow-lg" controls>
                <source src="/videos/video.mp4" type="video/mp4" />
            </video>
            <div className=" flex flex-col gap-4 justify-center container-right">
                <span className="subtitle"> VIDEO REEL</span>
                <h2 className="title text-4xl">
                    Unlock The Greatest Value Possible
                </h2>
                <p className="paragraph">
                    Design, business understanding, ability to put themselves in
                    the merchant&apos;s shoes meant to partner.
                </p>
            </div>
        </section>
    );
}
