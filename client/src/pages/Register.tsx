import { useContext, type JSX } from "react"
import { useNavigate, type NavigateFunction } from "react-router-dom";
import AppContext, { type AppContextType } from "../context/AppContext";

const Register = (): boolean | JSX.Element => {
    const context: AppContextType | undefined = useContext(AppContext);

    const navigate: NavigateFunction = useNavigate();

    if(!context) {
        return <>Loading...</>
    }

    const { state, setState } = context;

    return state === 'register' && (
        <main className="h-[100vh] w-full grid lg:grid-cols-2 2xl:grid-cols-[0.85fr_1.15fr] grid-cols-1">
            {/* Register Form */}
            <section className="bg-white w-[90%] sm:w-full h-full py-10 md:py-15 px-5 sm:px-25 flex flex-col gap-10 max-lg:items-center justify-self-center">
                <img src="/logo.png" alt="logo" onClick={() => {navigate('/')}} className="w-50 md:w-60 cursor-pointer" />
                <div className="flex flex-col w-fit h-full gap-5">
                    <h2 className="text-3xl sm:text-[2rem] font-medium tracking-tight flex flex-col max-lg:self-center">
                        Register
                        <span id="dash" className="w-10 h-0.75 rounded-full max-lg:hidden"></span>
                    </h2>
                    <div className="flex gap-5 justify-center items-center w-full mt-2 max-md:flex-wrap">
                        <button className="w-fit flex gap-2 border justify-center items-center px-3.5 py-2.5 text-sm rounded-md cursor-pointer hover:scale-[1.02] transition-all duration-300">
                            <img src="/google.png" alt="google icon" className="w-5" />
                            Register with Google
                        </button>
                        <button className="w-fit flex gap-2 bg-[#3B5998] text-sm text-white justify-center items-center rounded-md px-3.5 py-2.5 cursor-pointer hover:scale-[1.02] transition-all duration-300">
                            <img src="/facebook.png" alt="facebook icon" className="w-5" />
                            Register with facebook
                        </button>
                    </div>
                    <p className="w-full text-sm flex justify-center items-center gap-1">
                        <span className="bg-[#7e8182] w-5 h-0.5"></span>
                        OR
                        <span className="bg-[#7e8182] w-5 h-0.5"></span>
                    </p>
                    <form className="w-full flex flex-col gap-5">
                        <div className="flex gap-5">
                            <div className="w-1/2 flex flex-col gap-1">
                                <label className="text-sm text-[#7e8182]">First name</label>
                                <input 
                                    type="text" 
                                    className="border-b-[1.25px] border-[#7e8182] outline-none text-sm py-1 focus:border-black transition-all duration-300"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col gap-1">
                                <label className="text-sm text-[#7e8182]">Last name</label>
                                <input 
                                    type="text" 
                                    className="border-b-[1.25px] border-[#7e8182] outline-none text-sm py-1 focus:border-black transition-all duration-300"
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label className="text-sm text-[#7e8182]">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="me@example.com"
                                className="border-b-[1.25px] border-[#7e8182] outline-none text-sm py-1 focus:border-black transition-all duration-300"
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-sm text-[#7e8182]">Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                className="border-b-[1.25px] border-[#7e8182] outline-none text-sm py-1 focus:border-black transition-all duration-300"
                            />
                        </div>
                        <div className="w-full flex gap-1 text-xs items-center">
                            <input 
                                type="checkbox" 
                                id="checkbox"
                                className="accent-black cursor-pointer"
                                />
                            <label htmlFor='checkbox' className="cursor-pointer text-[#7e8182]">I agree to the <span className="hover:underline hover:underline-offset-2 text-black font-medium">Terms of Service</span> and <span className="hover:underline hover:underline-offset-2 text-black font-medium">Privacy Policy</span></label>
                        </div>
                        <button type="submit" className="bg-[#7e8182] hover:bg-transparent text-white hover:text-[#7e8182] border-2 border-[#7e8182] rounded-md cursor-pointer transition-all duration-300 py-1.5 mt-3 font-medium">Register</button>
                        <p onClick={() => {setState('login'); navigate('/login')}} className="text-blue-700 hover:underline hover:underline-offset-4 cursor-pointer text-xs w-fit">Already have an account? Login!</p>
                    </form>
                </div>
            </section>
            
            {/* Register Info */}
            <section className="w-full h-full flex items-center justify-end overflow-hidden relative max-lg:hidden">
                <img src="/login.png" alt="register background" className="w-fit h-full lg:object-fill xl:object-contain" />
                <div className="absolute z-50 flex flex-col text-white right-40 xl:right-35 top-65 gap-10 w-[55%] xl:w-[45%]">
                    <h3 className="text-5xl font-semibold">Hey, there!</h3>
                    <p className="text-xl font-light">You can register and start your blogging journey today!</p>
                </div>
            </section>
        </main>
    )
}

export default Register
