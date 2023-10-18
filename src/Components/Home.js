import React from 'react'
import phone from "../asset/iphone9-4.jpg";
import cart from "../asset/cart.png"
import { useSelector } from 'react-redux'
import HeaderContainer from '../Container/HeaderContainer';
export default function Home(props) {
    console.log("props",props)
    return (
        <>
            <div className='home'>
                <div className=''>
                    <h1 className='text-center text-[42px] font-[700] my-[30px]'>Home Components</h1>
                   <HeaderContainer />

                </div>
                <div className='border-2 flex justify-evenly items-center w-[800px] m-[auto]'>
                    <div className='my-[20px]'>
                        <img src={phone} />
                    </div>
                    <div className=''>
                        <span>I-Phone</span>
                        <span>Price: $1000.00</span>
                    </div>
                    <button onClick={
                        () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                    } className='bg-[#24ACF2] w-[120px] h-[50px] rounded-[10px] text-[#fff]'>Add to Cart</button>
                     <button onClick={
                        () => { props.removeToCartHandler() }
                    } className='bg-[#24ACF2] w-[120px] h-[50px] rounded-[10px] text-[#fff]' >Remove to Cart</button>
                </div>
            </div>
        </>
    )
}


