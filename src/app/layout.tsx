import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { NavBar } from "@/components/NavBar";
const epilogue = Epilogue({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Agency Design",
    description: "A beauty agency design webpage",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={epilogue.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
