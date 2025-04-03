import Link from 'next/link';

export default function Applications() {
    const apps = [
        { name: 'Skin Editor', url: '/apps/skin-editor' },
        { name: 'Minigames', url: '/apps/minigames' },
        { name: 'Server Finder', url: '/apps/server-finder' },
        { name: 'Build Showcaser', url: '/apps/build-showcaser' }
    ];

    return (
        <div className="content-box mb-4">
            <div className="section-header uppercase">
                Applications
            </div>
            <div className="p-3 text-xs">
                {apps.map((app) => (
                    <div key={app.name} className="leftcolumn-item">
                        <Link href={app.url} className="text-blue-800 hover:underline">{app.name}</Link>
                    </div>
                ))}
                <div className="text-center mt-2">
                    <Link href="/apps" className="text-blue-800 hover:underline text-xs">Browse More Apps</Link>
                </div>
            </div>
        </div>
    );
}