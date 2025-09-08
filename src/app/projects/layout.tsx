import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Mitchell Coovert",
    description: "Projects that Mitchell Coovert has worked on - mitchell.coovert.ca",
};

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>);
}