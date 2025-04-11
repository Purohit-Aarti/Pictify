import React from 'react'
import {assets} from '../assets/assets.js'

function Description() {
  return (
    <div className='flex flex-col justify-center items-center text-center my-24 p-6 md:px-28'>
        <h2 className='text-3xl sm:text-4xl mb-2'>Create AI Image</h2>
        <p className=' mb-8 text-gray-500 text-[13px]'>Turn your imagination into visuals</p>

        <div className='flex flex-col md:flex-row items-center gap-5'>
            <img src={assets.sample_img_1} className='w-60 sm:w-80 rounded-lg'/>
            <div className='flex flex-col justify-center items-start gap-3'>
                <h3 className='text-xl font-medium max-w-lg mb-4 text-left '>Introducing the AI Powered Text to Image Generator</h3>
                <p className='text-[13px] text-gray-600 text-left '>Unleash your creativity with our cutting-edge AI text to image generator. Transform your ideas into stunning visuals in seconds. Our tool makes it easy to bring your concepts to life.</p>
                <p className='text-[13px] text-gray-600 text-left'>Simply enter a description of the image you want to create, and watch as our advanced AI algorithms generate a unique image tailored to your specifications. You can customize your images to fit any project or aesthetic.</p>
            </div>
        </div>            
    </div>
  )
}

export default Description
