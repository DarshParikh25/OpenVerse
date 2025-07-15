import { useContext, type JSX } from "react"
import { useNavigate, type NavigateFunction } from "react-router-dom";
import AppContext, { type AppContextType } from "../context/AppContext";

const LogIn = (): boolean | JSX.Element => {
    const context: AppContextType | undefined = useContext(AppContext);

    const navigate: NavigateFunction = useNavigate();

    if(!context) {
        return <>Loading...</>
    }

    const { state, setState, setShowNav } = context;

    return state === 'login' && (
        <main className="h-[100vh] w-full grid lg:grid-cols-2 2xl:grid-cols-[0.75fr_1.25fr] grid-cols-1">
            {/* Login Form */}
            <section className="bg-white w-full h-full sm:py-20 lg:py-15 xl:py-20 py-13 px-5 sm:px-25 flex flex-col gap-15 max-lg:items-center max-lg:justify-center">
                <img src="/logo.png" alt="logo" onClick={() => {navigate('/'); setShowNav(true)}} className="w-50 md:w-60 cursor-pointer" />
                <div className="flex flex-col w-fit h-full gap-7">
                    <h2 className="text-3xl sm:text-[2rem] font-medium tracking-tight flex flex-col max-lg:self-center">
                        Login
                        <span id="dash" className="w-10 h-0.75 rounded-full max-lg:hidden"></span>
                    </h2>
                    <div className="flex gap-5 justify-center items-center w-full mt-2 max-md:flex-wrap">
                        <button className="flex gap-2 border justify-center items-center px-3.5 py-2.5 text-sm rounded-md cursor-pointer hover:scale-[1.02] transition-all duration-300">
                            <img src="/google.png" alt="google icon" className="w-5 pointer-events-none" />
                            Login with Google
                        </button>
                        <button className="flex gap-1 bg-[#3B5998] text-sm text-white justify-center items-center rounded-md px-3.5 py-2.5 cursor-pointer hover:scale-[1.02] transition-all duration-300">
                            <img src="/facebook.png" alt="facebook icon" className="w-5 pointer-events-none" />
                            Login with facebook
                        </button>
                    </div>
                    <p className="w-full text-sm flex justify-center items-center gap-1">
                        <span className="bg-[#7e8182] w-5 h-0.5"></span>
                        OR
                        <span className="bg-[#7e8182] w-5 h-0.5"></span>
                    </p>
                    <form className="w-full flex flex-col gap-5">
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
                        <div className="w-full flex justify-between text-xs items-center flex-wrap">
                            <div className="flex gap-1 justify-center items-center">
                                <input 
                                    type="checkbox" 
                                    id="checkbox"
                                    className="accent-black cursor-pointer"
                                />
                                <label htmlFor='checkbox' className="cursor-pointer">Remember me</label>
                            </div>
                            <p className="text-blue-700 hover:underline hover:underline-offset-4 cursor-pointer">Forgot password?</p>
                        </div>
                        <button type="submit" className="bg-[#7e8182] hover:bg-transparent text-white hover:text-[#7e8182] border-2 border-[#7e8182] rounded-md cursor-pointer transition-all duration-300 py-1.5 mt-3 font-medium">Log in</button>
                        <p onClick={() => {setState('register'); navigate('/register')}} className="text-blue-700 hover:underline hover:underline-offset-4 cursor-pointer text-xs w-fit">New here? Create an account!</p>
                    </form>
                </div>
            </section>
            
            {/* Login Info */}
            <section className="w-full h-full flex items-center justify-end overflow-hidden relative max-lg:hidden">
                <img src="/login.png" alt="login background" className="w-fit h-full lg:object-fill 2xl:object-contain pointer-events-none" />
                <div className="absolute z-50 flex flex-col text-white right-40 top-65 gap-10 w-[55%] xl:w-[45%]">
                    <h3 className="text-5xl font-semibold">Welcome back!</h3>
                    <p className="text-xl font-light">You can login to access with your existing account!</p>
                </div>
            </section>
        </main>
    )
}

export default LogIn
