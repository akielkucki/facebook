import Link from 'next/link';
import {CommentProps} from "@/lib/types";

export default function Comment({ author, content, timestamp }: CommentProps) {
    return (
        <div className="mb-2">
      <span className="text-xs">
        <Link href={`/profile/${author}`} className="font-bold text-blue-800 hover:underline">
          {author}
        </Link>
          {' '}{content}
      </span>
            <div className="timestamp">{timestamp}</div>
        </div>
    );
}