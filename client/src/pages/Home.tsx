import type { JSX } from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Plans from "../components/Plans"
import Subscription from "../components/Subscription"

const Home = (): JSX.Element => {
    return (
        <>
            <Hero />
            <About />
            <Plans />
            <Subscription />
        </>
    )
}

export default Home
