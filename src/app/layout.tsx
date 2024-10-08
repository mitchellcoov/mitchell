import type { Metadata } from "next";
import Link from 'next/link'
import Image from "next/image";

import { Montserrat } from "next/font/google"
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import "./globals.css";

const montserrat: NextFontWithVariable = Montserrat({
    weight: ['400'],
    display: 'swap',
    style: 'normal',
    subsets: ['latin'],
    variable: "--font-montserrat"
});

export const metadata: Metadata = {
    title: "Home - Mitchell Coovert",
    description: "Home page for mitchell.coovert.ca",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body className={`${montserrat.variable} antialiased flex flex-col h-screen justify-between`}>
                <header className="header grid grid-cols-header">
                    <nav className="col-span-1" >
                        <Link className="header-link" href="https://coovert.ca">coovert</Link>
                    </nav>
                    <nav className="col-start-3">
                        <Link className="header-link" href="/">home</Link>
                        <Link className="header-link" href="/projects">projects</Link>
                        <Link className="header-link" href="/blog">blog</Link>

                    </nav>

                </header>

                <main className="">{children}</main>

                <footer className="footer grid grid-cols-footer bottom-2 mt-auto">

                    <p className="p-6 mt-8">&copy; 2024 Mitchell Coovert. All rights reserved.</p>

                    <div className="col-span-1 col-start-3">
                        find me here
                        <nav className="grid grid-cols-2 p-2 max-w-32">
                            <a className="col-span-1" href="https://www.linkedin.com/in/mitchell-coovert-80364a288/">
                                <Image className="hidden dark:block" src="/logos/dark_linkedin_icon.png" alt="React logo" width={30} height={30} />
                                <Image className="dark:hidden block" src="/logos/light_linkedin_icon.png" alt="React logo" width={30} height={30} />
                            </a>
                            <a className="col-span-1" href="https://github.com/mitchellcoov">
                                <Image className="hidden dark:block" src="/logos/dark_github_icon.png" alt="React logo" width={30} height={30} />
                                <Image className="dark:hidden block" src="/logos/light_github_icon.png" alt="React logo" width={30} height={30} />
                            </a>
                        </nav>
                    </div>


                </footer>
            </body>

        </html>
    );
}
