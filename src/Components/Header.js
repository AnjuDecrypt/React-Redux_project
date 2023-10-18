import React from 'react'
import phone from "../asset/iphone9-4.jpg";
import cart from "../asset/cart.png"
import { useSelector } from 'react-redux'
export default function Header(props) {
    console.log(props.data)
    return (
        <>
            <div className='home'>
                <div className=''>
                    <div className='absolute top-[20px] right-[20px]'>
                        <span className='absolute top-[-10px] left-[27px] '>{props.data.length}</span>
                        <img src={cart} className='w-[50px] h-[50px]' />
                    </div>

                </div>
            </div>
        </>
    )
}


