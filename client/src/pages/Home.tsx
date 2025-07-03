import type { JSX } from "react"

const Home = (): JSX.Element => {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full h-[calc(100vh-6rem)] flex justify-center max-lg:py-10 py-20 max-sm:py-20">
                <div className="sm:max-w-[70%] max-w-[80%] flex flex-col items-center gap-10">
                    <p className="text-sm border border-gray rounded-full px-8 py-1 opacity-60">Read. Write. Explore. Anything.</p>
                    <h1 className="flex flex-col justify-center items-center gap-5 text-[2.5rem] sm:text-6xl font-semibold mt-5">
                        <span className="text-center tracking-tighter max-sm:leading-10">A Platform for Every <span className="text-[#7e8182] font-bold">Voice.</span></span>
                        <span className="text-center tracking-tighter max-sm:leading-10">A Library for Every <span className="text-[#7e8182] font-bold">Reader.</span></span>
                    </h1>
                    <p className="text-center text-sm md:max-w-[75%]">Whether you're a curious reader or an aspiring writer, OpenVerse gives you the freedom to read diverse blogs and publish your own — with zero limits on creativity.</p>
                    <div className="flex flex-col sm:flex-row md:mt-5 md:gap-8 gap-5">
                        <button className="bg-transparent border-2 border-[#7e8182] text-[#7e8182] font-medium rounded-full px-8 py-3 cursor-pointer hover:text-white hover:bg-[#7e8182] transition-all duration-500">Start Reading</button>
                        <button className="text-white bg-[#7e8182] rounded-full px-10 py-3 font-medium border-2 border-[#7e8182] cursor-pointer hover:bg-white hover:text-[#7e8182] transition-all duration-500">Write a Blog</button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div>
                
            </div>
        </>
    )
}

export default Home
