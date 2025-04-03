'use client';

import React, { useState, FormEvent } from 'react';

export default function ChatBox() {
    const [message, setMessage] = useState('');

    const messages = [
        { author: 'DiamondKing', content: 'Anyone want to join my clan?' },
        { author: 'TNTmaster', content: 'Axe is constantly killing me any admin on?' },
        { author: 'EnderQueen', content: 'gg on the tournament' },
        { author: 'SteveOP', content: 'need help with getting the .50 cal' },
        { author: 'AxeWarrior', content: 'trading enchanted books, msg me' },
        { author: 'CreeperSlayer99', content: 'streaming mc in 10 mins' }
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Here you would typically send the message to your backend
        console.log('Sending message:', message);

        // Clear the input
        setMessage('');
    };

    return (
        <div className="content-box">
            <div className="section-header uppercase">
                Server Chat
            </div>
            <div className="p-3">
                <div className="shoutbox mb-2">
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <span className="font-bold">{msg.author}:</span> {msg.content}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex">
                    <input
                        type="text"
                        className="input-field w-full mr-1"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="blue-button">Send</button>
                </form>
            </div>
        </div>
    );
}