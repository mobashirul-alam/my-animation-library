import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="h-screen flex flex-col bg-gray-900 text-white">
                <nav className="h-full flex flex-col justify-center items-center">
                    <ul className="space-y-8 text-center">
                        <li>
                            <Link
                                href="/text-animation"
                                className="text-4xl font-bold hover:text-gray-400"
                            >
                                Text Animation
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    );
}
