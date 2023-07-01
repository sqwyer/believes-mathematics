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
    <div className="min-h-[115vh] md:min-h-[70vh] xl:min-h-[80vh] bg-[#0ED0D9] px-10 md:px-24 lg:px-40 xl:px-52 pt-36 md:pt-[25vh] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#12B9C0] z-10" style={{
        clipPath: "polygon(0 56%, 100% 16%, 100% 100%, 0 100%)"
      }}></div>
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 z-20">
        <h1 className="w-full mx-auto text-center md:text-left md:mx-0 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold md:w-[500px] xl:w-[600px] 2xl:w-[800px] text-white z-20 selection:bg-[#0fa0a5]" >Learn Calculus, Number Theory, and Algebra</h1>
        <p className="lg:text-lg font-semibold w-full text-center md:text-left mx-auto md:mx-0 md:w-[374px] text-white z-20 selection:bg-[#0fa0a5]" >I believe that you are capable of any and everything you put your mind to. Take a moment, breathe, and believe.</p>
      </div>
      <img className="absolute bottom-0 left-0 right-0 w-full h-[65vh] md:h-[50vh] md:w-auto md:left-auto md:right-10 z-30 xl:right-52 select-none " src={hero}></img>
    </div>
    <div className="px-10 md:px-24 lg:px-40 xl:px-52 py-10">
      <div className="flex flex-row gap-4 items-baseline">
        <h1 className="font-semibold text-lg selection:bg-gray-300" id="videos">Recent Videos</h1>
        <a className="text-sm cursor-pointer selection:bg-gray-300" href="https://www.youtube.com/@believesmathematics9321/videos" rel="nofollow" target="_blank">(See more)</a>
      </div>
      {loading == true && <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 xl:gap-24 mt-10">
        <div className="bg-gray-200 animate-pulse duration-100 rounded-lg overflow-hidden w-full aspect-video select-none"></div>
        <div className="bg-gray-200 animate-pulse duration-100 rounded-lg overflow-hidden w-full aspect-video select-none"></div>
        <div className="bg-gray-200 animate-pulse duration-100 rounded-lg overflow-hidden w-full aspect-video select-none"></div>
      </div>}
      {error == null && <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 xl:gap-24 mt-10">
        {videos != null && videos.items.map((item: any, index: number) => <iframe src={`https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A5173&widgetid=7`} key={index} className="rounded-lg overflow-hidden w-full aspect-video shadow-sm select-none" />)}
      </div>}
      {error != null && <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 xl:gap-24 mt-10">
        {rememberedRecents.map((item: any, index: number) => <iframe src={`https://www.youtube.com/embed/${item}?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A5173&widgetid=7`} key={index} className="rounded-lg overflow-hidden w-full aspect-video shadow-sm select-none" />)}
      </div>}
    </div>
    <Footer />
  </div>
}

export default App
