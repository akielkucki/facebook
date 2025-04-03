// User types
export interface User {
    username: string;
    avatarUrl?: string;
}

// Profile types
export interface ProfileProps {
    username: string;
    avatarUrl?: string;
}

// Friend types
export interface Friend {
    username: string;
    online: boolean;
}

// Application types
export interface Application {
    name: string;
    url: string;
}

// Comment types
export interface CommentProps {
    author: string;
    content: string;
    timestamp: string;
}

// Image types
export interface Image {
    url: string;
    alt?: string;
}

// Post types
export interface PostContent {
    text?: string;
    type?: string;
}

export interface PostProps {
    author: string;
    content: PostContent;
    timestamp: string;
    image?: Image;
    comments?: CommentProps[];
    likes?: number;
}

// Server types
export interface ServerPlayer {
    current: number;
    max: number;
}

export interface Server {
    name: string;
    status: 'online' | 'offline' | 'maintenance';
    players?: ServerPlayer;
}

// Sponsored ad types
export interface SponsoredAd {
    title: string;
    description: string;
    imageUrl: string;
}

// Event types
export interface Event {
    title: string;
    date: string;
    id?: string;
}

// Chat message types
export interface ChatMessage {
    author: string;
    content: string;
    timestamp?: string;
}

// Navigation item types
export interface NavItem {
    name: string;
    url: string;
    badge?: number;
}

// News ticker types
export interface NewsItem {
    content: string;
    important?: boolean;
}

// Component prop types
export interface OnlineFriendsProps {
    friends?: Friend[];
}

export interface ApplicationsProps {
    apps?: Application[];
}

export interface ServerStatusProps {
    servers?: Server[];
}

export interface SponsoredProps {
    ads?: SponsoredAd[];
}

export interface EventsListProps {
    events?: Event[];
}

export interface ChatBoxProps {
    initialMessages?: ChatMessage[];
    onSendMessage?: (message: string) => void;
}

export interface PostInputProps {
    onSubmitPost?: (content: string) => void;
}

export interface NewsFeedProps {
    posts?: PostProps[];
}