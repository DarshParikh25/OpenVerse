import type { JSX } from "react"
import { useNavigate, type NavigateFunction } from "react-router-dom"

const Hero = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <section className="w-full h-[calc(100vh-4rem)] flex justify-center max-lg:py-10 py-20 max-sm:py-25">
            <div className="sm:max-w-[70%] max-w-[80%] h-[100%] flex flex-col items-center gap-5 sm:gap-10">
                <p className="sm:text-sm text-xs border border-gray rounded-full px-8 py-1 opacity-60 text-center leading-4">Read. Write. Explore. Anything.</p>
                <h1 className="flex flex-col justify-center items-center gap-5 text-[2.5rem] sm:text-6xl font-semibold sm:mt-5">
                    <span className="text-center tracking-tighter max-sm:leading-10">A Platform for Every <span className="text-[#7e8182] font-bold">Voice.</span></span>
                    <span className="text-center tracking-tighter max-sm:leading-10">A Library for Every <span className="text-[#7e8182] font-bold">Reader.</span></span>
                </h1>
                <p className="text-center text-sm md:max-w-[75%]">Whether you're a curious reader or an aspiring writer, OpenVerse gives you the freedom to read diverse blogs and publish your own — with zero limits on creativity.</p>
                <div className="flex flex-col items-center sm:flex-row md:mt-5 md:gap-8 gap-3 sm:gap-5">
                    <button onClick={() => {navigate('/blog-posts')}} className="bg-transparent border-2 border-[#7e8182] text-[#7e8182] font-medium rounded-full px-6 py-2 sm:px-8 sm:py-3 cursor-pointer hover:text-white hover:bg-[#7e8182] transition-all duration-500 w-fit max-sm:text-sm">Start Reading</button>
                    <button onClick={() => {navigate('/create-blog-post')}} className="text-white bg-[#7e8182] rounded-full px-7 py-2 sm:px-10 sm:py-3 font-medium border-2 border-[#7e8182] cursor-pointer hover:bg-white hover:text-[#7e8182] transition-all duration-500 w-fit max-sm:text-sm">Write a Blog</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
