import Image from "next/image";
export const NavBar = () => (
    <nav className=" text-text-light flex justify-between items-center gap-2 bg-blue-dark">
        <div className="flex items-center gap-4">
            <Image
                className=""
                src={"/home/agency-logo-edit.svg"}
                height={50}
                width={50}
                alt="Agency logo, a orange polygon"
            />
            <h2 className="font-bold text-xl">Agency</h2>
        </div>
        <ul className="flex gap-4 text-sm">
            <li className="px-4 py-2 hover:bg-bg-orange cursor-pointer">
                About
            </li>
            <li className="px-4 py-2 hover:bg-bg-orange cursor-pointer">
                Services
            </li>
            <li className="px-4 py-2 hover:bg-bg-orange cursor-pointer">
                Pricing
            </li>
            <li className="px-4 py-2 hover:bg-bg-orange cursor-pointer">
                Blog
            </li>
        </ul>
        <button className="contact-button">CONTACT</button>
    </nav>
);
