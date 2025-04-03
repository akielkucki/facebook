import {PostProps} from "@/lib/types";
import Header from "@/components/header";
import ProfileCard from "@/components/profilecard";
import Applications from "@/components/applications";
import OnlineFriends from "@/components/onlinefriends";
import PostInput from "@/components/postinput";
import Post from "@/components/ui/post";
import ServerStatus from "@/components/serverstatus";
import Sponsored from "@/components/sponsored";
import EventsList from "@/components/eventslist";
import ChatBox from "@/components/chatbox";
import Footer from "@/components/footer";

export default function Home() {
  // Sample posts data
  const posts: PostProps[] = [
    {
      author: 'EnderQueen',
      content: { type: 'just won the weekly PvP tournament!' },
      timestamp: 'Yesterday at 11:42pm',
      comments: []
    },
    {
      author: 'DiamondKing',
      content: {
        type: 'shared a screenshot',
        text: 'Check out my new fortress build!'
      },
      image: {
        url: '/placeholder-fortress.png',
        alt: 'Minecraft Build'
      },
      timestamp: 'April 1 at 3:14pm',
      comments: [
        {
          author: 'TNTmaster',
          content: 'Ayyyyyyyyy this is amazing brother!',
          timestamp: 'April 1 at 4:22pm'
        },
        {
          author: 'Luke Belmar',
          content: 'Are there any seed oils?',
          timestamp: 'April 1 at 4:22pm'
        },
        {
          author: 'AlmondMilk65',
          content: 'pretty sure I killed this guy 5 times earlier :P',
          timestamp: 'April 1 at 5:07pm'
        }
      ]
    },
    {
      author: 'GunGens Server',
      content: {
        type: 'posted a server update',
        text: "We're excited to announce our new Survival Islands game mode launching this weekend! Compete with friends to see who can survive the longest on limited resources."
      },
      timestamp: 'March 30 at 9:45am',
      comments: []
    }
  ];

  return (
      <>
        <Header />

        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">

            {/* Left Sidebar */}
            <div className="w-full md:w-1/5">
              <ProfileCard username="Stratfod" />
              <Applications />
              <OnlineFriends />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/5">
              {/* News Ticker */}
              <div className="news-ticker mb-4">
                <strong>Server News:</strong> GunGens Server has updated to v1.20.4! • PvP Tournament this Saturday at 3PM EST
              </div>

              {/* Post Input */}
              <PostInput />

              {/* News Feed */}
              <div className="content-box mb-4">
                <div className="section-header uppercase">
                  News Feed
                </div>
                <div className="p-3">
                  {posts.map((post, index) => (
                      <Post key={index} post={post} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full md:w-1/5">
              <ServerStatus />
              <Sponsored />
              <EventsList />
              <ChatBox />
            </div>
          </div>
        </div>

        <Footer />
      </>
  );
}
