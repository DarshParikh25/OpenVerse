import { useContext, type JSX } from "react"
import AppContext, { type blogType } from "../context/AppContext"

const Blogs = (): JSX.Element => {
    const context = useContext(AppContext)

    if(!context){
        return <>Loading...</>
    }

    const { blogData } = context;

    return (
        <div className="md:pt-33 pt-20 grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] w-full h-full">
            {/* Filter options */}
            <div className="w-full h-full top-0 lg:block hidden border-r border-[#7e8182]">
                

            </div>

            {/* Blogs */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 px-15 py-7">
                {
                    blogData.map((blog: blogType): JSX.Element => (
                        <div className="group border-2 border-[#7e8182] w-[320px] rounded-xl relative pb-20 justify-self-center cursor-pointer">
                            <div className="overflow-hidden rounded-t-xl w-full">
                                <img src={blog.thumbnail} alt="blog thumbnail" className="pointer-events-none object-cover group-hover:scale-[1.05] transition-all duration-500" />
                            </div>
                            <div className="flex flex-col gap-5 items-between justify-between py-6">
                                <div className="px-5 flex flex-col gap-1">
                                    <h2 key={blog.id} className="text-xl font-semibold">{blog.title}</h2>
                                    <p className="text-sm text-[#7e8182]">{blog.author.name}</p>
                                    <ul className="flex gap-2 flex-wrap tracking-tight my-3">
                                        {
                                            blog.tags.map((tag: string, index: number): JSX.Element => (
                                                <li key={index} className="bg-[#bec2c3] text-black text-xs font-light px-3 py-1.5 rounded-full">{tag}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="flex self-end flex-col absolute left-5 bottom-5 text-sm text-[#7e8182]">
                                    <p>{blog.likes}</p>
                                    <p>{blog.views}</p>
                                    <p>{blog.comments}</p>
                                </div>
                                <div className="flex flex-col items-end absolute right-5 bottom-5 text-sm text-[#7e8182]">
                                    <p>{blog.publishedAt}</p>
                                    <p>{blog.readTime}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs
