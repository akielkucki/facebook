import Link from 'next/link';

export default function PostInput() {
    return (
        <div className="content-box mb-4">
            <div className="p-3">
                <div className="leftbar-heading uppercase">What&#39;s on your mind?</div>
                <div className="flex">
          <textarea
              className="input-field w-full h-16 mr-2"
              placeholder="Share your Minecraft adventures..."
          ></textarea>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-xs">
                        <Link href="#" className="text-blue-800 hover:underline mr-2">Add Photo</Link>
                        <Link href="#" className="text-blue-800 hover:underline mr-2">Add Video</Link>
                        <Link href="#" className="text-blue-800 hover:underline">Add Server Link</Link>
                    </div>
                    <button className="blue-button">Share</button>
                </div>
            </div>
        </div>
    );
}