import type { JSX } from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Plans from "../components/Plans"

const Home = (): JSX.Element => {
    return (
        <>
            <Hero />
            <About />
            <Plans />
        </>
    )
}

export default Home
