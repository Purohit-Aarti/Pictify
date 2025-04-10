import React from 'react'
import {assets} from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 border rounded-full border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="star icon" />
        </div>

        <h1 className='text-4xl max-w-[450px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <br></br><span className='text-green-600'>image</span>, in seconds!</h1>

        <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - jusy type, and watch the magic happen!</p>

        <button className='cursor-pointer sm:text-lg bg-black text-white w-auto mt-8 px-12 py-2.5 flex items-center rounded-full gap-2 '>Generate Images <img className='h-6' src={assets.star_group}></img></button>

        {/* <div className='flex flex-row justify-center items-center gap-2 mt-20'>
            <img className='h-20' src={assets.sample_img_1}></img>
            <img className='h-20' src={assets.sample_img_2}></img>
            <img className='h-20' src={assets.sample_img_1}></img>
            <img className='h-20' src={assets.sample_img_2}></img>
            <img className='h-20' src={assets.sample_img_1}></img>
            <img className='h-20' src={assets.sample_img_2}></img>
        </div> */}

          <div className='flex flex-wrap justify-center gap-3 mt-16'>
            {
              Array(6).fill('').map((item, idx) => (
                <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-12' src= {idx % 2 === 0 ?  assets.sample_img_1 : assets.sample_img_2}key={idx} width={70} ></img>
              ))
            }

          </div>

        <p className='text-neutral-600 mt-2'>Generated Images from Pictify!</p>
    </div>
  )
}

export default Header
