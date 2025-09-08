import type { Metadata } from "next";
import Image from "next/image";

import { Montserrat } from "next/font/google"
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "./globals.css";
import Header from "./components/Header";

const montserrat: NextFontWithVariable = Montserrat({
    weight: ['300', '400', '500', '600'],
    display: 'swap',
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: "--font-montserrat"
});

export const metadata: Metadata = {
    title: "Home - Mitchell Coovert",
    description: "Home page for mitchell.coovert.ca",
    icons: [
        {rel: "icon", url: "/icons/favicon-16x16.png", type: "image/png", sizes:"16x16"},
        {rel: "icon", url: "/icons/favicon-32x32.png", type: "image/png", sizes:"32x32"},
        {rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png", type: "image/png"},
        {rel: "manifest", url:"/icons/site.webmanifest"}
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>

            </head>

            <body className={`${montserrat.variable} antialiased`}>
                <Header />

                <main>{children}</main>

                <footer className="footer flex flex-col justify-center items-center text-white bg-background-secondary">

                    <div className="footer-element flex gap-2 items-center">
                        You can find me here:
                        
                            <a className="" href="https://www.linkedin.com/in/mitchell-coovert-80364a288/">
                                <Image className="hidden dark:block" src="/logos/dark_linkedin_icon.png" alt="React logo" width={30} height={30} />
                                <Image className="dark:hidden block" src="/logos/light_linkedin_icon.png" alt="React logo" width={30} height={30} />
                            </a>
                            <a className="" href="https://github.com/mitchellcoov">
                                <Image className="hidden dark:block" src="/logos/dark_github_icon.png" alt="React logo" width={30} height={30} />
                                <Image className="dark:hidden block" src="/logos/light_github_icon.png" alt="React logo" width={30} height={30} />
                            </a>
                        
                    </div>
                    <p className="footer-element">&copy; 2025 Mitchell Coovert. All rights reserved.</p>

                </footer>
            </body>

        </html>
    );
}
