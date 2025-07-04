import type { JSX } from "react"
import Hero from "../components/Hero"
import About from "../components/About"

const Home = (): JSX.Element => {
    return (
        <>
            <Hero />
            <About />
        </>
    )
}

export default Home
