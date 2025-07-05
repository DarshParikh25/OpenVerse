import type { JSX } from 'react';

const Subscription = (): JSX.Element => {
    return (
        <div className='w-full flex flex-col justify-center items-center bg-[#7e8182] p-20 gap-5 text-white'>
            <h2 className='max-md:text-4xl text-[2.75rem] tracking-tighter font-medium'>Subscribe for Updates</h2>
            <p className='text-[#ffffffb1]'>Stay informed about new features, platform updates, and trending blog content.</p>
            <form className='flex w-full justify-center mt-5 gap-5'>
                <div className='flex border-2 border-white rounded-full px-7 py-3 w-1/3 gap-3 items-center'>
                    <img src="/email.png" alt="email for subscribing for the updates" className='w-5' />
                    <input 
                        type="email" 
                        value={''} 
                        id='value' 
                        placeholder='Enter your email' 
                        className='outline-none text-sm w-full'
                    />
                </div>
                <button type="submit" className='border-2 border-white rounded-full h-fit self-center px-7 py-3 bg-white text-[#7e8182] font-medium cursor-pointer hover:text-white hover:bg-transparent transition-all duration-300'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default Subscription;