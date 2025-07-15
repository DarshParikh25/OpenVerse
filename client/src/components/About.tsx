import type { JSX } from "react"
import { useNavigate, type NavigateFunction } from "react-router-dom"

const About = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <section className="w-full flex flex-col justify-center items-center gap-20 mb-20">
            <h2 className="max-md:text-4xl text-[2.75rem] tracking-tighter font-medium">Why OpenVerse?</h2>

            {/* 1 */}
            <div className="w-[70%] md:w-[85%] lg:w-[70%] grid lg:grid-cols-[1.25fr_0.75fr] gap-20">
                <div className="text-left flex flex-col gap-5 justify-center">
                    <h3 className="max-md:text-3xl text-4xl flex flex-col gap-1.5">
                        Diverse Content
                        <span id="dash" className="h-1 w-20 rounded-full"></span>
                    </h3>
                    <p className="max-md:w-full w-[80%] text-justify">Access a growing collection of high-quality blogs spanning technology, lifestyle, business, health, travel, and more. Discover fresh perspectives and insights from passionate writers worldwide who share their expertise and experiences.</p>
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">10K+</span>
                            <span className="text-[#7e8182] text-sm">ARTICLES</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">25+</span>
                            <span className="text-[#7e8182] text-sm">CATEGORIES</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">500+</span>
                            <span className="text-[#7e8182] text-sm">WRITERS</span>
                        </div>
                    </div>
                    <button onClick={() => {navigate('/blog-posts')}} className="w-fit px-6 py-3 border-2 border-[#7e8182] bg-transparent rounded-full text-sm font-medium text-[#7e8182] cursor-pointer hover:text-white hover:bg-[#7e8182] transition-all duration-300 mt-2">Explore Content</button>
                </div>
                <img src="/diverse-content.png" alt="Writing content logo" className="self-center hover:scale-[1.03] transition-all duration-300 min-w-50 w-full max-lg:w-1/2 max-md:w-full justify-self-center" />
            </div>

            {/* 2 */}
            <div className="w-[70%] md:w-[85%] lg:w-[70%] flex flex-col-reverse lg:grid lg:grid-cols-[0.75fr_1.25fr] gap-20">
                <img src="/simple-publishing.png" alt="Publishing logo" className="self-center hover:scale-[1.03] transition-all duration-300 min-w-50 w-full max-lg:w-1/2 max-md:w-full justify-self-center" />
                <div className="text-left flex flex-col gap-5">
                    <h3 className="max-md:text-3xl text-4xl flex flex-col gap-1.5">
                        Simple Publishing
                        <span id="dash" className="h-1 w-20 rounded-full"></span>
                    </h3>
                    <p className="max-md:w-full w-[80%] text-justify">Create and share your first blog post at no cost. Our intuitive editor makes it easy to craft compelling content and reach your audience with just a few clicks. No technical skills required – just focus on your story.</p>
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">3 Min</span>
                            <span className="text-[#7e8182] text-sm">SETUP TIME</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">1 Click</span>
                            <span className="text-[#7e8182] text-sm">CATEGORIES</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">Free</span>
                            <span className="text-[#7e8182] text-sm">FIRST POST</span>
                        </div>
                    </div>
                    <button onClick={() => {navigate('/create-blog-post')}} className="w-fit px-6 py-3 border-2 border-[#7e8182] hover:bg-transparent rounded-full text-sm font-medium hover:text-[#7e8182] cursor-pointer text-white bg-[#7e8182] transition-all duration-300 mt-2">Start Writing</button>
                </div>
            </div>

            {/* 3 */}
            <div className="w-[70%] md:w-[85%] lg:w-[70%] grid lg:grid-cols-[1.25fr_0.75fr] gap-20">
                <div className="text-left flex flex-col gap-5">
                    <h3 className="max-md:text-3xl text-4xl flex flex-col gap-1.5">
                        Fair Publishing Model
                        <span id="dash" className="h-1 w-20 rounded-full"></span>
                    </h3>
                    <p className="max-md:w-full w-[80%] text-justify">After your first free post, subscribe to continue sharing with the world. Our transparent pricing ensures you can focus on creating great content without hidden surprises. No hidden fees, no questions asked.</p>
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">$49</span>
                            <span className="text-[#7e8182] text-sm">START PRICE</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">0%</span>
                            <span className="text-[#7e8182] text-sm">HIDDEN FEES</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">No</span>
                            <span className="text-[#7e8182] text-sm">AUTO RENEWAL</span>
                        </div>
                    </div>
                    <button className="w-fit px-6 py-3 border-2 border-[#7e8182] bg-transparent rounded-full text-sm font-medium text-[#7e8182] cursor-pointer hover:text-white hover:bg-[#7e8182] transition-all duration-300 mt-2">View Pricing</button>
                </div>
                <img src="/fair-publishing-model.jpg" alt="fair Publishing Model logo" className="self-center hover:scale-[1.03] transition-all duration-300 min-w-50 w-full max-lg:w-1/2 max-md:w-full justify-self-center" />
            </div>

            {/* 4 */}
            <div className="w-[70%] md:w-[85%] lg:w-[70%] flex flex-col-reverse lg:grid lg:grid-cols-[0.75fr_1.25fr] gap-20">
                <img src="/designed-for-everyone.jpg" alt="Community logo" className="self-center hover:scale-[1.03] transition-all duration-300 min-w-50 w-full max-lg:w-1/2 max-md:w-full justify-self-center" />
                <div className="text-left flex flex-col gap-5">
                    <h3 className="max-md:text-3xl text-4xl flex flex-col gap-1.5">
                        Designed for Everyone
                        <span id="dash" className="h-1 w-20 rounded-full"></span>
                    </h3>
                    <p className="max-md:w-full w-[80%] text-justify">Whether you're a reader, a writer, or both — OpenVerse adapts to your needs. Our platform grows with you, offering features that enhance your blogging journey from beginner to expert level.</p>
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">100K+</span>
                            <span className="text-[#7e8182] text-sm">ACTIVE USERS</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">4.8/5</span>
                            <span className="text-[#7e8182] text-sm">USER RATING</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-semibold">99.9%</span>
                            <span className="text-[#7e8182] text-sm">UPTIME</span>
                        </div>
                    </div>
                    <button className="w-fit px-6 py-3 border-2 border-[#7e8182] hover:bg-transparent rounded-full text-sm font-medium hover:text-[#7e8182] cursor-pointer text-white bg-[#7e8182] transition-all duration-300 mt-2">Join Community</button>
                </div>
            </div>
        </section>
    )
}

export default About
