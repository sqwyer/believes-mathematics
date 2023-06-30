import axios from "axios"
import { Nav } from "./components/Nav"
import hero from "./assets/hero.png"
import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"

const rememberedRecents = [
  "AwRhsOtRL3s",
  "GtfGYiwAUFE",
  "N9oG8W26Bg4"
]

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [videos, setVideos] = useState<null|any>(null)
  const [error, setError] = useState<null|any>(null);
  
  useEffect(() => {
    axios({
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YOUTUBE_API_KEY}&channelId=UCdVdpSy6QohsZAdMz9Ivb1Q&part=snippet,id&order=date&maxResults=3`
    }).then(res => {
      setVideos(res.data)
      setLoading(false)
    }).catch(err => {
      setError(err)
      console.error(err);
      setLoading(false)
    })
  }, [])
  
  return <div className="min-h-screen" id="home">
    <Nav />
    <div className="h-[80vh] bg-[#0ED0D9] px-52 pt-[25vh] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#12B9C0] z-10" style={{
        clipPath: "polygon(0 56%, 100% 16%, 100% 100%, 0 100%)"
      }}></div>
      <img className="absolute right-52 bottom-0 z-30 h-[65vh] select-none" src={hero}></img>
      <div className="flex flex-col gap-11 z-20">
        <h1 className="text-6xl font-extrabold w-[800px] text-white z-20 selection:bg-[#0fa0a5]" style={{lineHeight: "70px"}}>Learn Calculus, Number Theory, and Algebra</h1>
        <p className="text-lg font-semibold w-[374px] text-white z-20 selection:bg-[#0fa0a5]" style={{lineHeight: "22px"}}>I believe that you are capable of any and everything you put your mind to. Take a moment, breathe, and believe.</p>
      </div>
    </div>
    <div className="px-52 py-10">
      <div className="flex flex-row gap-4 items-baseline">
        <h1 className="font-semibold text-lg selection:bg-gray-300" id="videos">Recent Videos</h1>
        <a className="text-sm cursor-pointer selection:bg-gray-300" href="https://www.youtube.com/@believesmathematics9321/videos" rel="nofollow" target="_blank">(See more)</a>
      </div>
      {loading == true && <div className="grid grid-cols-3 gap-24 mt-10">
        <div className="bg-gray-200 animate-pulse duration-100 rounded-lg overflow-hidden w-full aspect-video select-none"></div>
        <div className="bg-gray-200 animate-pulse duration-100 rounded-lg overflow-hidden w-full aspect-video select-none"></div>
        <div className="bg-gray-200 animate-pulse duration-100 rounded-lg overflow-hidden w-full aspect-video select-none"></div>
      </div>}
      {error == null && <div className="grid grid-cols-3 gap-24 mt-10">
        {videos != null && videos.items.map((item: any, index: number) => <iframe src={`https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A5173&widgetid=7`} key={index} className="rounded-lg overflow-hidden w-full aspect-video shadow-sm select-none" />)}
      </div>}
      {error != null && <div className="grid grid-cols-3 gap-24 mt-10">
        {rememberedRecents.map((item: any, index: number) => <iframe src={`https://www.youtube.com/embed/${item}?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A5173&widgetid=7`} key={index} className="rounded-lg overflow-hidden w-full aspect-video shadow-sm select-none" />)}
      </div>}
    </div>
    <Footer />
  </div>
}

export default App
