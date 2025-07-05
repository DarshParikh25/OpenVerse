import type { JSX } from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Plans from "../components/Plans"
import Subscription from "../components/Subscription"
import Contact from "../components/Contact"

const Home = (): JSX.Element => {
    return (
        <div className="pt-20">
            <Hero />
            <About />
            <Plans />
            <Subscription />
            <Contact />
        </div>
    )
}

export default Home
