import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="bg-blue-900 text-white px-4 py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src="/yester-logo.png"
                            alt="Yester Logo"
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                        />
                    </div>
                    <div className="flex">
                        <Link href="/" className="px-3 py-1 hover:bg-blue-800">Home</Link>
                        <Link href="/profile" className="px-3 py-1 hover:bg-blue-800">Profile</Link>
                        <Link href="/forums" className="px-3 py-1 hover:bg-blue-800">Forums</Link>
                        <Link href="/players" className="px-3 py-1 hover:bg-blue-800">Players</Link>
                        <Link href="/servers" className="px-3 py-1 hover:bg-blue-800">Servers</Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/profile/stratfod" className="px-2 hover:underline">Stratfod</Link>
                        <span className="px-2">|</span>
                        <Link href="/logout" className="px-2 hover:underline">Logout</Link>
                    </div>
                </div>
            </div>
            <div className="bg-blue-800 h-8"></div>
        </>
    );
}