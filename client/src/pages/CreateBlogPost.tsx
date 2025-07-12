import type { JSX } from "react"
import TiptapEditor from "../components/TiptapEditor"

const CreateBlogPost = (): JSX.Element => {
    return (
        <main className="pt-33 px-35 pb-15 w-full">
            <section className="w-full border-2 border-[#7e8182] px-4 pb-4">
                <TiptapEditor />
            </section>
            <section className="flex gap-3 justify-self-end mt-5">
                <button className="border-2 border-[#7e8182] rounded-full font-medium px-4 py-2 text-sm bg-transparent text-black hover:text-white hover:bg-[#7e8182] transition-all duration-300 cursor-pointer">Save as Draft</button>
                <button className="border-2 border-[#7e8182] rounded-full font-medium px-4 py-2 text-sm bg-[#7e8182] text-white hover:text-black hover:bg-transparent transition-all duration-300 cursor-pointer">Publish</button>
            </section>
        </main>
    )
}

export default CreateBlogPost
