import type { JSX } from "react"
import TiptapEditor from "../components/Tiptap"

const CreateBlogPost = (): JSX.Element => {
    return (
        <div className="pt-30">
            <TiptapEditor />
        </div>
    )
}

export default CreateBlogPost
