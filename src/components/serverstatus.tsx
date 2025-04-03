

export default function ServerStatus() {
    const servers = [
        {
            name: 'GunGens Survival',
            status: 'online',
            players: { current: 128, max: 150 }
        },
        {
            name: 'GunGens Creative',
            status: 'online',
            players: { current: 64, max: 100 }
        },
        {
            name: 'GunGens Skyblock',
            status: 'maintenance',
            players: { current: 0, max: 100 }
        }
    ];

    return (
        <div className="content-box mb-4">
            <div className="section-header uppercase">
                Server Status
            </div>
            <div className="p-3 text-xs">
                {servers.map((server) => (
                    <div key={server.name} className="server-box p-2 mb-2">
                        <div className="font-bold">{server.name}</div>
                        <div className="flex items-center text-xs mt-1">
                            <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-500' : 'bg-red-500'} mr-1`}></div>
                            <span>
                {server.status === 'online'
                    ? `Online - ${server.players.current}/${server.players.max} players`
                    : 'Maintenance'
                }
              </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}