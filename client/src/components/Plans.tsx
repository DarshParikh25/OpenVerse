import type { JSX } from 'react';

const Plans = (): JSX.Element => {
    return (
        <section className='w-full flex flex-col justify-center items-center gap-10 mb-30'>
            <div className='flex flex-col gap-2 justify-center items-center w-fit text-center'>
                <h2 className="max-md:text-4xl text-[2.75rem] tracking-tighter font-medium">Publishing Plans</h2>
                <p className='text-[#7e8182]'>Transparent Pricing. No Hidden Charges.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 w-[90%] mt-10 mb-3 gap-5'>

                {/* Launchpad */}
                <div className='w-70 lg:w-80 border-2 border-[#7e8182] p-10 sm:p-15 rounded-2xl flex flex-col gap-5 justify-self-center md:relative'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h3 className='text-2xl font-semibold'>Launchpad</h3>
                        <p className='text-sm text-[#7e8182] text-center'>Blast off with your first blog.</p>
                    </div>
                    <p className='text-3xl font-bold self-center'>$0</p>
                    <div className='flex flex-col gap-3 text-sm'>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Publish 1 Blog</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Read Unlimited Blogs</p>
                        </div>
                    </div>
                    <button className='w-fit border-2 border-[#7e8182] font-medium self-center rounded-full px-6 py-2 text-[#7e8182] hover:bg-[#7e8182] hover:text-white cursor-pointer transition-all duration-300 mt-5 md:absolute md:bottom-15'>Let's Launch</button>
                </div>

                {/* Occasional */}
                <div className='w-70 lg:w-80 border-2 border-[#7e8182] p-10 sm:p-15 rounded-2xl flex flex-col gap-5 justify-self-center 2xl:relative'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h3 className='text-2xl font-semibold'>Occasional</h3>
                        <p className='text-sm text-[#7e8182] text-center'>Write when it matters most.</p>
                    </div>
                    <p className='self-center'>
                        <span className='text-3xl font-bold'>$49</span>
                        <span className='text-[#7e8182]'>/month</span>
                    </p>
                    <div className='flex flex-col gap-3 text-sm'>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Publish 1 Blog Per Month</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Read Unlimited Blogs</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Edit Blogs After Publishing</p>
                        </div>
                    </div>
                    <button className='w-fit border-2 border-[#7e8182] font-medium self-center rounded-full px-6 py-2 text-[#7e8182] hover:bg-[#7e8182] hover:text-white cursor-pointer transition-all duration-300 mt-5 2xl:absolute 2xl:bottom-15'>Give it a Go</button>
                </div>

                {/* Builder */}
                <div className='w-70 lg:w-80 p-10 sm:p-15 rounded-2xl flex flex-col gap-5 justify-self-center md:relative bg-[#7e8182] relative max-2xl:mt-5 text-white'>
                    <p className='bg-white w-70 lg:w-80 absolute left-0 -top-5 rounded-2xl border-2 border-[#7e8182] py-3 text-center font-semibold text-[#7e8182]'>Best Value</p>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h3 className='text-2xl font-semibold'>Builder</h3>
                        <p className='text-sm text-[#ffffffb1] text-center'>Build your presence step by step.</p>
                    </div>
                    <p className='self-center'>
                        <span className='text-3xl font-bold'>$149</span>
                        <span className='text-[#ffffffb1]'>/month</span>
                    </p>
                    <div className='flex flex-col gap-3 text-sm'>
                        <div className='flex items-center gap-3'>
                            <img src="/white-tick.png" alt="" className='w-3.75' />
                            <p>Publish 1 Blog Per Month</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/white-tick.png" alt="" className='w-3.75' />
                            <p>Read Unlimited Blogs</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/white-tick.png" alt="" className='w-3.75' />
                            <p>Edit Blogs After Publishing</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/white-tick.png" alt="" className='w-3.75' />
                            <p>Blog analytics</p>
                        </div>
                    </div>
                    <button className='w-fit border-2 border-white font-medium self-center rounded-full px-6 py-2 hover:bg-white bg-transparent hover:text-[#7e8182] text-white cursor-pointer transition-all duration-300 mt-5 md:absolute md:bottom-15'>Start Building</button>
                </div>

                {/* Elite */}
                <div className='w-70 lg:w-80 border-2 border-[#7e8182] p-10 sm:p-15 rounded-2xl flex flex-col gap-5 justify-self-center'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h3 className='text-2xl font-semibold'>Elite</h3>
                        <p className='text-sm text-[#7e8182] text-center'>Go all-in. You’re the publisher.</p>
                    </div>
                    <p className='self-center'>
                        <span className='text-3xl font-bold'>$499</span>
                        <span className='text-[#7e8182]'>/month</span>
                    </p>
                    <div className='flex flex-col gap-3 text-sm'>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Publish 1 Blog Per Month</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Read Unlimited Blogs</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Edit Blogs After Publishing</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Blog Analytics</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Featured Blog Placement</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src="/tick.png" alt="" className='w-3.75' />
                            <p>Priority Support</p>
                        </div>
                    </div>
                    <button className='w-fit border-2 border-[#7e8182] font-medium self-center rounded-full px-6 py-2 text-[#7e8182] hover:bg-[#7e8182] hover:text-white cursor-pointer transition-all duration-300 mt-5'>Go Unlimited</button>
                </div>
            </div>
        </section>
    )
}

export default Plans;