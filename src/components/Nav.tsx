import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineYoutube } from 'react-icons/ai';

export const Nav = () => <div className="flex flex-row py-5 justify-between items-center bg-white fixed top-0 left-0 right-0 shadow-md z-50 px-10 md:px-24 lg:px-40 xl:px-52">
    <a className="flex flex-col items-center cursor-pointer" href="/#home">
        <span className="font-bold" style={{fontSize: "18px"}}>βelievesMathematics</span>
        <span className="text-gray-400 text-sm font-semibold hidden md:inline-block" style={{fontSize: "11.2px"}}>Calculus - Number Theory - Algebra</span>
    </a>
    <div className="flex flex-row gap-4 items-center">
        <a className="text-sm font-semibold cursor-pointer opacity-80 hover:opacity-100 duration-75 hidden md:inline-block" href="/#videos">Videos</a>
        {/* <a className="text-sm font-semibold cursor-pointer opacity-80 hover:opacity-100 duration-75" href="/#practice">Practice Problems</a> */}
        <a className="text-sm font-semibold cursor-pointer opacity-80 hover:opacity-100 duration-75 hidden md:inline-block" href="mailto:brockbivens02@gmail.com">Contact Me</a>
        <a className="text-3xl font-semibold cursor-pointer opacity-80 hover:opacity-100 duration-75" href="https://www.instagram.com/brock.biv/" rel="nofollow" target="_blank">
            <IoLogoInstagram />
        </a>
        <a className="text-3xl font-semibold cursor-pointer opacity-80 hover:opacity-100 duration-75" href="https://www.youtube.com/@believesmathematics9321" rel="nofollow" target="_blank">
            <AiOutlineYoutube />
        </a>
    </div>
</div>