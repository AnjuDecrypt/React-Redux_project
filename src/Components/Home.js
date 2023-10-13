import React from 'react'
import phone from "../asset/iphone9-4.jpg";
import cart from "../asset/cart.png"
export default function Home() {
    return (
        <>
            <div className='home'>
                <div className=''>
                    <h1 className='text-center text-[42px] font-[700] my-[30px]'>Home Components</h1>
                    <div className='absolute top-[20px] right-[20px]'>
                    <img src={cart} className='w-[50px] h-[50px]' />
                    </div>
                   
                </div>
                <div className='border-2 flex justify-evenly items-center w-[800px] m-[auto]'>
                    <div className='my-[20px]'>
                        <img src={phone} />
                    </div>
                    <div className=''>
                        <span>I-Phone</span>
                        <span>Price: $1000.00</span>
                    </div>
                    <button className='bg-[#24ACF2] w-[120px] h-[50px] rounded-[10px] text-[#fff]'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
