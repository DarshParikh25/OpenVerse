import { useContext, type JSX } from "react"
import AppContext, { type blogType } from "../context/AppContext"

const Blogs = (): JSX.Element => {
    const context = useContext(AppContext)

    if(!context){
        return <>Loading...</>
    }

    const { blogData } = context;

    return (
        <div className="pt-30">
            {/* Filter options */}
            <div>

            </div>

            {/* Blogs */}
            <div>
                {
                    blogData.map((blog: blogType): JSX.Element => (
                        <>
                            <div key={blog.id}>{blog.title}</div>
                            <img src={blog.thumbnail} alt="blog thumbnail" />
                            {blog.tags.map((tag: string, index: number): JSX.Element => (
                                <li key={index}>{tag}</li>
                            ))}
                            <img src={blog.author.avatar} alt="author avatar" />
                            <p>{blog.author.name}</p>
                            <p>Published at: {blog.publishedAt}</p>
                            <p>Updated at: {blog.updatedAt}</p>
                            <p>{blog.readTime}</p>
                            <p>Likes: {blog.likes}</p>
                            <p>Views: {blog.views}</p>
                            <p>Comments: {blog.comments}</p>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs
