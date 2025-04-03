import Link from 'next/link';

export default function OnlineFriends() {
    const friends = [
        'EnderQueen',
        'DiamondKing',
        'TNTmaster',
        'AxeWarrior',
        'SteveOP'
    ];

    return (
        <div className="content-box mb-4">
            <div className="section-header uppercase">
                Online Friends (8)
            </div>
            <div className="p-3">
                <div className="text-xs space-y-2">
                    {friends.map((friend) => (
                        <div key={friend} className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-green-500 mr-1"></div>
                            <Link href={`/profile/${friend}`} className="text-blue-800 hover:underline">{friend}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}