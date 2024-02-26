import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Bottombar from "@/components/Bottombar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Climb Max",
    description: "Climb Max in CheonAn",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={openSans.className} lang="en">
            <body className="w-fill bg-neutral-100 overflow-auto">
                <header className="sticky top-0 bg-white z-10 border-b">
                    <div className="max-w-screen-xl mx-auto">
                        <Navbar />
                    </div>
                </header>
                <main className="w-full flex justify-center max-w-screen-xl mx-auto">
                    {children}
                </main>
                <footer className="fixed w-[100%] bottom-0 bg-white z-10 border-t">
                    <div className="max-w-screen-xl mx-auto">
                        <Bottombar />
                    </div>
                </footer>
            </body>
        </html>
    );
}
