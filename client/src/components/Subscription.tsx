import { useState, type JSX } from 'react';

const Subscription = (): JSX.Element => {
    const [email, setEmail] = useState('');

    return (
        <section className='w-full flex flex-col justify-center items-center bg-[#7e8182] px-10 py-15 md:p-20 gap-15 text-white'>
            <div className='flex flex-col items-center text-center max-md:gap-3 gap-2'>
                <h2 className='max-md:text-4xl text-[2.75rem] tracking-tighter font-medium'>Subscribe for Updates</h2>
                <p className='text-[#ffffffb1] text-sm'>Stay informed about new features, platform updates, and trending blog content.</p>
            </div>
            <form className='flex w-full justify-center gap-5 max-lg:flex-wrap'>
                <div className='flex border-2 border-white rounded-full md:px-7 px-5 py-3 w-full md:w-[30%] gap-3 items-center'>
                    <img src="/email.png" alt="email for subscribing for the updates" className='w-5' />
                    <input 
                        type="email" 
                        value={email} 
                        id='email' 
                        placeholder='Enter your email' 
                        className='sub outline-none text-sm w-full'
                    />
                </div>
                <button type="submit" className='border-2 border-white rounded-full h-fit self-center md:px-7 px-5 max-md:text-sm py-2.5 md:py-3 bg-white text-[#7e8182] font-medium cursor-pointer hover:text-white hover:bg-transparent transition-all duration-300'>
                    Subscribe
                </button>
            </form>
        </section>
    )
}

export default Subscription;