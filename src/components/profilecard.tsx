import Link from 'next/link';
import Image from 'next/image';

export default function ProfileCard({ username = 'Stratfod' }) {
    return (
        <div className="content-box mb-4">
            <div className="p-3">
                <div className="flex items-center mb-3">
                    <div className="w-16 h-16 bg-gray-200 border border-gray-300 overflow-hidden mr-2">
                        <Image
                            src={`https://mc-heads.net/avatar/${username}`}
                            alt="Player Skin"
                            width={64}
                            height={64}
                            className="pixelated"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-sm">{username}</div>
                        <div className="text-xs text-blue-800 hover:underline cursor-pointer">Edit My Profile</div>
                    </div>
                </div>

                <div className="text-sm">
                    <div className="leftcolumn-item">
                        <Link href="/news" className="text-blue-800 hover:underline">News Feed</Link>
                    </div>
                    <div className="leftcolumn-item">
                        <Link href="/messages" className="text-blue-800 hover:underline">Messages</Link>
                        <span className="bg-red-600 text-white text-xs px-1 ml-1 rounded">2</span>
                    </div>
                    <div className="leftcolumn-item">
                        <Link href="/friends/requests" className="text-blue-800 hover:underline">Friend Requests</Link>
                    </div>
                    <div className="leftcolumn-item">
                        <Link href="/screenshots" className="text-blue-800 hover:underline">My Screenshots</Link>
                    </div>
                    <div className="leftcolumn-item">
                        <Link href="/forums" className="text-blue-800 hover:underline">Forums</Link>
                    </div>
                    <div className="leftcolumn-item">
                        <Link href="/groups" className="text-blue-800 hover:underline">Groups</Link>
                    </div>
                    <div className="leftcolumn-item">
                        <Link href="/events" className="text-blue-800 hover:underline">Events</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}