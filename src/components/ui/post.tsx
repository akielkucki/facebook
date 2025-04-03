"use client";
import Link from 'next/link';
import Image from 'next/image';
import {CommentProps, PostProps} from '@/lib/types';
import React, {useState} from "react";
import {cn} from "@/lib/lib";
function CommentInput({author, onSubmit}: {author?: string, onSubmit: (text: string) => void}) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit(text);
            setText(''); // Clear input after submission
        }
    };
    return <form onSubmit={handleSubmit} className="mt-1 flex flex-col justify-end items-end">
        <input
            type="text"
            className="input-field w-full"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button
            type="submit"
            className="text-blue-50 bg-sky-800 cursor-pointer hover:bg-sky-600 text-sm py-1 my-1 px-2"
            disabled={!text.trim()}
        >
            Comment {author && (<>on {author}&apos;s post</>)}
        </button>
    </form>
}
function ButtonInteraction({className, children, onClick}: {className?: string, children: React.ReactNode, onClick?: () => void}) {
    return (
        <span className={cn("text-blue-800 hover:underline mr-2 cursor-pointer", className)} onClick={onClick}>
            {children}
        </span>
    )
}
export default function Post({ post }: { post: PostProps }) {
    const { author, content, timestamp, image, comments: initialComments = [] } = post;

    // Determine if content is an object or string
    const contentIsObject = typeof content === 'object' && content !== null;
    const contentType = contentIsObject && 'type' in content ? content.type : null;
    const contentText = contentIsObject && 'text' in content ? content.text : typeof content === 'string' ? content : null;
    const [likeCount, setLikeCount] = useState(0);
    const [disableLikeButton, setDisableLikeButton] = useState(false);
    const [writeComment, setWriteComment] = useState(false);
    const [comments, setComments] = useState<CommentProps[]>(initialComments);
    function handleAddComment(content: string) {
        const newComment: CommentProps = {
            timestamp: new Date().toLocaleString(),
            content: content,
            author: "You", //Dynamically generate here
        };

        setComments([...comments, newComment]);
        setWriteComment(false); // Optionally hide the comment input after posting
    }
    function likePost() {
        if (!disableLikeButton) {
            setLikeCount(likeCount + 1);
            setDisableLikeButton(true);
        } else {

        }
    }
    return (
        <div className="wall-post">
            <div className="flex">
                <div className="w-10 h-10 bg-gray-200 border border-gray-300 mr-2">
                    <Image
                        src={`https://mc-heads.net/avatar/${author}`}
                        alt="Player Skin"
                        width={40}
                        height={40}
                        className="pixelated"
                    />
                </div>
                <div className="flex-1">
                    <div>
                        <Link href={`/profile/${author}`} className="font-bold text-blue-800 hover:underline text-sm">
                            {author}
                        </Link>
                        {contentType && (
                            <span className="text-xs"> {contentType}</span>
                        )}
                    </div>

                    {contentText && (
                        <div className="my-2">
                            <div className="text-sm">{contentText}</div>
                            {image && (
                                <div className="mt-1 border border-gray-200">
                                    <Image
                                        src={image.url}
                                        alt={image.alt || "Minecraft Content"}
                                        width={400}
                                        height={250}
                                        className="w-full"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    <div className="timestamp mt-1">
                        {timestamp}
                    </div>
                    <div className={"flex justify-between items-center text-sm text-gray-500"}>
                        {likeCount} likes {comments.length} comments
                    </div>

                    <div className="flex mt-2 text-xs">
                        <span className={`${disableLikeButton ? "text-gray-600" : "text-blue-800 hover:underline cursor-pointer"}  mr-2 `} onClick={()=>likePost()}>Like</span>
                        <ButtonInteraction onClick={()=>setWriteComment(!writeComment)}>Comment</ButtonInteraction>
                        <ButtonInteraction>Share</ButtonInteraction>
                    </div>
                    {writeComment && (
                        <CommentInput
                            author={author}
                            onSubmit={handleAddComment}
                        />
                    )}
                    {comments && comments.length > 0 && (
                        <div className="ml-3 mt-2 comment-box p-2">
                            {comments.map((comment, index) => (
                                <div key={index} className="mb-2">
                  <span className="text-xs">
                    <Link href={`/profile/${comment.author}`} className="font-bold text-blue-800 hover:underline">
                      {comment.author}
                    </Link>
                      {' '}{comment.content}<br/><div className={"flex justify-baseline items-center"}><ButtonInteraction>like</ButtonInteraction><span className={"-translate-x-1"}>•</span><ButtonInteraction>reply</ButtonInteraction></div>
                  </span>
                                    <div className="timestamp">{comment.timestamp}</div>
                                </div>
                            ))}
                            <CommentInput
                                author={author}
                                onSubmit={handleAddComment}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}