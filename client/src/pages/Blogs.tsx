import { useContext, useState, type ChangeEvent, type JSX } from "react"
import { FaSearch } from 'react-icons/fa'
import { CiCircleRemove } from "react-icons/ci"

import AppContext, { type blogType, type AppContextType } from "../context/AppContext"

const Blogs = (): JSX.Element => {
    const context: AppContextType | undefined = useContext(AppContext)

    const [search, setSearch] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [tag, setTag] = useState<string | null>(null);
    const [minVal, setMinVal] = useState<number>(0);
    const [maxVal, setMaxVal] = useState<number>(30);
    const [minRange] = useState<number>(0);
    const [maxRange] = useState<number>(30);

    const minPercentage: number = ((minVal - minRange) / (maxRange - minRange)) * 100;
    const maxPercentage: number = ((maxVal - minRange) / (maxRange - minRange)) * 100;

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.min(Number(e.target.value), maxVal - 1);
        setMinVal(val);
    }

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(Number(e.target.value), minVal + 1);
        setMaxVal(val);
    }

    if(!context){
        return <>Loading...</>
    }

    const { blogData } = context;

    const filteredBlogs: blogType[] = blogData.filter((blog) => {
        const query: string | undefined = search?.trim().toLowerCase();

        const matchSearch: boolean = !query ||  (
            blog?.title.toLowerCase().includes(query) ||
            blog?.author.name.toLowerCase().includes(query) ||
            blog?.category[0].toLowerCase().includes(query) ||
            blog?.tags.some(tag => tag.toLowerCase().includes(query))
        )

        const matchAuthor: boolean = !author || blog.author.name.toLowerCase().includes(author.toLowerCase());
        const matchCategory: boolean = !category || blog.category[0].toLowerCase().includes(category.toLowerCase());
        const matchTag: boolean = !tag || blog.tags.some(tag => tag.toLowerCase().includes(tag.toLowerCase()));

        const matchReadTime: boolean = (
            minVal === null || parseInt(blog.readTime, 10) >= minVal
        ) && (
            maxVal === null || parseInt(blog.readTime, 10) <= maxVal
        )

        return (
            matchSearch && 
            matchAuthor && 
            matchCategory && 
            matchTag && 
            matchReadTime
        )
    })

    console.log(filteredBlogs);

    return (
        <main className="md:pt-33 pt-20 grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] w-full h-full mx-auto">
            {/* Filter, sort and search options */}
            <section className="w-full h-fit md:w-[70%] justify-self-center lg:w-full min-h-[85vh] lg:sticky lg:top-33 flex lg:border-r lg:border-[#7e8182] max-md:py-5 lg:py-5 px-7 flex-col gap-5">
                <div className="flex items-center justify-center w-full px-3 py-1.5 border border-[#7e8182] rounded-full h-fit gap-3">
                    <FaSearch className="text-[#7e8182]" />
                    <input 
                        type="text" 
                        value={search ?? ''}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} 
                        placeholder="Search blog posts..." 
                        className="w-full outline-none text-sm"
                    />
                    <CiCircleRemove onClick={() => {setSearch(null)}} className="text-2xl cursor-pointer" />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-medium">Filter By</h3>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm px-2">Author</p>
                            <select 
                                id="authorFilter" 
                                onChange={(e) => {
                                    setAuthor(e.target.value || null)
                                }} 
                                className="border border-[#7e8182] rounded-full outline-none cursor-pointer text-xs px-3 py-1.5"
                            >
                                <option value="">All Authors</option>
                                <option value="Kiran Devi">Kiran Devi</option>
                                <option value="George Freedy">Georgy Freedy</option>
                                <option value="Oliver Swift">Oliver Swift</option>
                                <option value="Sheikh Md Imran">Sheikh Md Imran</option>
                                <option value="Yasmin Jain">Yasmin Jain</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm px-2">Categories</p>
                            <select 
                                id="categoryFilter" 
                                onChange={(e) => {
                                    setCategory(e.target.value || null)
                                }} 
                                className="border border-[#7e8182] rounded-full outline-none cursor-pointer text-xs px-3 py-1.5"
                            >
                                <option value="">All Categories</option>
                                <option value="Diet">Diet</option>
                                <option value="Exercise">Exercise</option>
                                <option value="Food">Food</option>
                                <option value="Coding">Coding</option>
                                <option value="Travel">Travel</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm px-2">Tags</p>
                            <select 
                                id="tagsFilter" 
                                onChange={(e) => {
                                    setTag(e.target.value || null)
                                }}
                                className="border border-[#7e8182] rounded-full outline-none cursor-pointer text-xs px-3 py-1.5"
                            >
                                <option value="">All Tags</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Laughter">Laughter</option>
                                <option value="Greek">Greek</option>
                                <option value="India">India</option>
                                <option value="War">War</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm px-2">Read Time</p>
                            <div className="relative px-2">
                                <div className="absolute h-[8px] rounded-sm top-0 bg-gray-200 left-2 right-2"></div>
                                <div 
                                    className="absolute h-[8px] bg-blue-500 rounded-sm top-0"
                                    style={{ // style because using template literal in tailwindcss does not handle dynamic data
                                        width: `${maxPercentage - minPercentage}%`,
                                        left: `${minPercentage}%`,
                                        marginLeft: '8px',
                                        marginRight: '8px'
                                    }}
                                ></div>
                                <input 
                                    type="range" 
                                    min={minRange} 
                                    max={maxRange} 
                                    value={minVal} 
                                    onChange={handleMinChange}
                                    className={`w-full absolute h-[8px] bg-transparent appearance-none pointer-events-none rangeInput`} 
                                />
                                <input 
                                    type="range" 
                                    min={minRange} 
                                    max={maxRange} 
                                    value={maxVal} 
                                    onChange={handleMaxChange}
                                    className={`w-full absolute h-[8px] bg-transparent appearance-none pointer-events-none rangeInput`} 
                                />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>{minVal} min</span>
                                <span>{maxVal} min</span>
                            </div>
                        </div>
                    </div>
                    <h3>Sort By</h3>
                    <div className="flex flex-col gap-2">
                        <select id="authorFilter" className="border border-[#7e8182] rounded-full outline-none cursor-pointer text-xs px-3 py-1.5">
                            <option value="Latest First">Latest First</option>
                            <option value="Latest Last">Latest Last</option>
                            <option value="Title A-Z">Title A-Z</option>
                            <option value="Title Z-A">Title Z-A</option>
                        </select>
                    </div>
                </div>
                <button className="cursor-pointer bg-[#7e8182] text-sm text-white py-2 rounded-full mt-3 border-2 border-[#7e8182] hover:bg-transparent hover:text-[#7e8182] transition-all duration-300">Clear all filters</button>
            </section>

            {/* Blogs */}
            <section className={`w-full ${filteredBlogs.length !== 0 && 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 py-10'} gap-10 px-15 relative`}>
                <p className="absolute right-15 text-sm text-[#7e8182]">Showing {filteredBlogs.length} results</p>
                {
                    filteredBlogs.length !== 0 ?
                    (
                        filteredBlogs.map((blog: blogType): JSX.Element => (
                            <div key={blog.id} className="group border border-[#7e8182] w-[320px] rounded-xl relative pb-20 justify-self-center cursor-pointer">
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
                    ) : (
                        <div className="w-full h-[90%] flex flex-col justify-center items-center text-sm text-[#7e8182]">
                            <p>No blog posts found {search && <>for "<span className="font-bold">{search}</span>"</>}.</p>
                            <p>{search && 'Try a different keyword or clear the search.'}</p>
                        </div>
                    )
                }
            </section>
        </main>
    )
}

export default Blogs
