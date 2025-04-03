import Link from 'next/link';
import Image from 'next/image';

export default function Sponsored() {
    const ads = [
        {
            title: 'Diamond Rank - 25% OFF',
            description: 'Upgrade your server experience with Diamond Rank! Get exclusive perks and items.',
            imageUrl: '/placeholder-diamond-rank.png'
        },
        {
            title: 'GunGens Easter Event',
            description: 'Join our special Easter egg hunt event! Collect eggs to win rare rewards.',
            imageUrl: '/placeholder-easter-event.png'
        }
    ];

    return (
        <div className="content-box mb-4">
            <div className="section-header uppercase">
                Sponsored
            </div>
            <div className="p-3">
                {ads.map((ad, index) => (
                    <div key={index} className={index < ads.length - 1 ? 'mb-3' : ''}>
                        <div className="text-xs font-bold">{ad.title}</div>
                        <div className="flex items-center mt-1">
                            <div className="w-12 h-12 bg-gray-200 border border-gray-300 mr-2">
                                <Image
                                    src={ad.imageUrl}
                                    alt={ad.title}
                                    width={48}
                                    height={48}
                                    className="pixelated"
                                />
                            </div>
                            <div className="text-xs">
                                <p>{ad.description}</p>
                                <Link href="#" className="text-blue-800 hover:underline">Learn More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}