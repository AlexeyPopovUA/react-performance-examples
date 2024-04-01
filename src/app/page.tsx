import Link from "next/link";
import {HomeNavLink} from "@/app/HomeNavLink";
import {Header} from "@/app/Header";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24">
            <Header />

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <HomeNavLink
                    path="/re-rendering-siblings/"
                    label="Re-rendering siblings"
                    description="Find out why sibling component are re-rendered when sharing state of their parent and how to control this" />
                <HomeNavLink
                    path="/caching-callback/"
                    label="Caching callback"
                    description="Find out why some of properties cause re-rendering" />
                <HomeNavLink
                    path="/caching-properties/"
                    label="Caching properties"
                    description="Find out why callbacks cause re-rendering and how to do it less" />
            </div>
        </main>
    );
}
