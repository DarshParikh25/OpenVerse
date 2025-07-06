import { useState, type JSX } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false); // Return type is not necessary to mention as it automatically infers.

    return (
        <div className={`w-full md:h-24 h-16 flex items-center justify-center ${showMenu && 'max-sm:h-34'} transition-all duration-300 fixed z-10`} >
            <div className="md:w-[70%] w-full bg-[#7e8182] sm:px-8 px-4 md:h-[70%] h-full md:rounded-full">
                <div className="w-full h-16 flex items-center justify-between">
                    <img src="/logo.png" alt="logo" onClick={() => {navigate('/')}} className="sm:w-36 w-28 h-fit cursor-pointer" />

                    {/* Buttons for large screen like pc or laptop users */}
                    <div className="flex justify-center items-center gap-5 max-sm:hidden">
                        <button className="border border-dotted pr-4 pl-2.5 py-2 text-sm cursor-pointer text-white flex justify-center items-center gap-1 hover:scale-[1.02] transition-all duration-300">
                            <img src="/create-blog.png" alt="create blog" className="w-5" />
                            Create Blog
                        </button>
                        <button className="rounded-full border-none px-6 py-2 bg-white text-sm font-semibold cursor-pointer">Login</button>
                    </div>

                    {/* Menu for small screens like mobile and tablet users */}
                    <div className="sm:hidden">
                        <img src="/menu.png" alt="menu" onClick={() => {setShowMenu(true)}} className={`w-7 cursor-pointer ${showMenu && 'hidden'}`} />
                        <img src="/close.png" alt="menu" onClick={() => {setShowMenu(false)}} className={`w-6 cursor-pointer ${!showMenu && 'hidden'}`} />
                    </div>
                </div>
                <div className={`sm:hidden ${!showMenu && 'hidden'} text-right text-sm font-semibold flex flex-col gap-2.5 pr-8`}>
                    <p className="text-white cursor-pointer">Create Blog</p>
                    <p className="text-white cursor-pointer">Login</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
