import type { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <section className="px-3 bg-[#7e8182]">
            <div>
                <div>
                    <h2>OpenVerse</h2>
                    <p>A comprehensive blogging platform designed for creators, writers, and storytellers. Share your passion, build your audience, and connect with readers worldwide.</p>
                    <p>"Every story deserves to be told"</p>
                    <div>
                        <img src="/facebook.png" alt="facebook icon" />
                        <img src="/twitter.png" alt="twitter icon" />
                        <img src="/instagram.png" alt="instagram icon" />
                    </div>
                </div>
                <div>
                    <h3>
                        Quick Links
                        <span></span>
                    </h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>All Blogs</li>
                        <li>Write a Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>&copy; 2025 OpenVerse. All rights reserved.</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;