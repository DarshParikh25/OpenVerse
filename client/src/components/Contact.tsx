import { useState, type JSX } from 'react';

const Contact = (): JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='w-full flex flex-col justify-center items-center my-20'>
            <div className='flex flex-col items-center justify-center text-center max-sm:gap-3 gap-2'>
                <h2 className="max-md:text-4xl text-[2.75rem] tracking-tighter font-medium">Get in Touch</h2>
                <p>Have questions, suggestions, or need support? We're here to help.</p>
            </div>
            <form className='w-[60%] md:w-[50%] lg:w-[35%] 2xl:w-1/4 flex flex-col justify-center items-center gap-5 mt-13'>
                <div className='flex flex-col w-full justify-center items-center gap-1'>
                    <label className='font-medium self-start'>Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        id="name" 
                        placeholder='Enter your name'
                        className='border-2 border-[#7e8182] rounded-md px-3 py-1.5 text-sm w-full outline-none focus:border-black transition-all duration-300'
                    />
                </div>
                <div className='flex flex-col w-full justify-center items-center gap-1'>
                    <label className='font-medium self-start'>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        id="email" 
                        placeholder='Enter your email'
                        className='border-2 border-[#7e8182] rounded-md px-3 py-1.5 text-sm w-full outline-none focus:border-black transition-all duration-300'
                    />
                </div>
                <div className='flex flex-col w-full justify-center items-center gap-1'>
                    <label className='font-medium self-start'>Message</label>
                    <textarea 
                        value={message} 
                        id="message" 
                        rows={4} 
                        placeholder='Enter the message'
                        className='resize-none border-2 border-[#7e8182] rounded-md px-3 py-1.5 text-sm w-full outline-none focus:border-black transition-all duration-300' 
                    />
                </div>
                <button type="submit" className='border-2 border-[#7e8182] bg-[#7e8182] cursor-pointer hover:text-[#7e8182] text-white rounded-full hover:bg-transparent px-6 py-2.5 transition-all duration-300 font-medium mt-3 max-sm:text-sm'>Send Message</button>
            </form>
            <p className='flex justify-center items-center gap-2 text-sm mt-5 text-[#7e8182] font-medium flex-wrap'>
                <img src="/contact.png" alt="email for support" className='w-4.5 h-fit' />
                Or reach us directly at: <span className='text-black underline underline-offset-3 cursor-pointer'>{import.meta.env.VITE_EMAIL}</span>
            </p>
        </div>
    )
}

export default Contact;