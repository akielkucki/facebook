import Link from 'next/link';

export default function EventsList() {
    const events = [
        {
            title: 'PvP Tournament',
            date: 'Saturday at 3:00 PM'
        },
        {
            title: 'Build Contest',
            date: 'April 10 at 2:00 PM'
        }
    ];

    return (
        <div className="content-box mb-4">
            <div className="section-header uppercase">
                Upcoming Events
            </div>
            <div className="p-3 text-xs">
                {events.map((event, index) => (
                    <div key={index} className="mb-2">
                        <div className="font-bold">{event.title}</div>
                        <div>{event.date}</div>
                        <div className="flex mt-1">
                            <Link href="#" className="text-blue-800 hover:underline mr-2">Attending</Link>
                            <Link href="#" className="text-blue-800 hover:underline mr-2">Maybe</Link>
                            <Link href="#" className="text-blue-800 hover:underline">Decline</Link>
                        </div>
                    </div>
                ))}
                <div className="text-center mt-2">
                    <Link href="/events" className="text-blue-800 hover:underline">See All Events</Link>
                </div>
            </div>
        </div>
    );
}