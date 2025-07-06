import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

const Footer = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section className="px-10 pt-10 pb-7 bg-[#7e8182]">
            {/* Upper Footer */}
            <div className="grid sm:grid-cols-2 grid-cols-1 pb-10 gap-10">
                <div className="flex flex-col gap-5 w-full">
                    <img src="/logo.png" alt="logo" onClick={() => {navigate('/')}} className="w-50 md:w-60 cursor-pointer" />
                    <p className="text-sm w-full md:w-[75%] text-justify">A comprehensive blogging platform designed for creators, writers, and storytellers. Share your passion, build your audience, and connect with readers worldwide.</p>
                    <p className="text-[#3f4041] text-sm italic">"Every story deserves to be told"</p>
                    <div className="flex gap-5">
                        <img src="/facebook.svg" alt="facebook icon" className="hover:scale-105 transition-all duration-300 cursor-pointer" />
                        <img src="/twitter.svg" alt="twitter icon" className="hover:scale-105 transition-all duration-300 cursor-pointer"  />
                        <img src="/instagram.svg" alt="instagram icon" className="hover:scale-105 transition-all duration-300 cursor-pointer"  />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-medium tracking-tighter flex flex-col gap-1">
                        Quick Links
                        <span id="footer-dash" className="h-0.75 w-10 rounded-full bg-black"></span>
                    </h3>
                    <ul className="flex flex-col gap-1.5 tracking-tighter text-sm">
                        <li className="text-[#333] hover:text-black hover:before:content-['~'] pl-1 transition-all duration-300 w-fit cursor-pointer">&nbsp;Home</li>
                        <li className="text-[#333] hover:text-black hover:before:content-['~'] pl-1 transition-all duration-300 w-fit cursor-pointer">&nbsp;About</li>
                        <li className="text-[#333] hover:text-black hover:before:content-['~'] pl-1 transition-all duration-300 w-fit cursor-pointer">&nbsp;All Blogs</li>
                        <li className="text-[#333] hover:text-black hover:before:content-['~'] pl-1 transition-all duration-300 w-fit cursor-pointer">&nbsp;Write a Blog</li>
                        <li className="text-[#333] hover:text-black hover:before:content-['~'] pl-1 transition-all duration-300 w-fit cursor-pointer">&nbsp;Contact Us</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t-[0.75px] border-[#3f4041] pt-5 flex md:flex-row flex-col md:justify-between justify-center items-center sm:gap-2 gap-5">
                <p className="text-[#3f4041] text-sm text-center">&copy; 2025 OpenVerse. All rights reserved.</p>
                <ul className="flex gap-3 sm:gap-5 flex-wrap justify-center">
                    <li className="text-sm cursor-pointer hover:underline underline-offset-4 text-[#333] hover:text-black font-medium">Privacy Policy</li>
                    <li className="text-sm cursor-pointer hover:underline underline-offset-4 text-[#333] hover:text-black font-medium">Terms of Service</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;