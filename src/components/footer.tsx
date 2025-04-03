import Link from 'next/link';

export default function Footer() {
    return (
        <div className="border-t border-gray-300 mt-6 py-4 bg-white">
            <div className="container mx-auto text-center text-xs text-gray-600">
                <div className="mb-2">
                    <Link href="/about" className="text-blue-800 hover:underline mx-2">About</Link>
                    <Link href="/privacy" className="text-blue-800 hover:underline mx-2">Privacy</Link>
                    <Link href="/terms" className="text-blue-800 hover:underline mx-2">Terms</Link>
                    <Link href="/help" className="text-blue-800 hover:underline mx-2">Help</Link>
                    <Link href="/advertise" className="text-blue-800 hover:underline mx-2">Advertise</Link>
                    <Link href="/servers" className="text-blue-800 hover:underline mx-2">Servers</Link>
                    <Link href="/developers" className="text-blue-800 hover:underline mx-2">Developers</Link>
                </div>
                <div>
                    <p>Yester © 2025 • an Alex Kielkucki Production<span className="blinking-cursor">_</span></p>
                </div>
            </div>
        </div>
    );
}