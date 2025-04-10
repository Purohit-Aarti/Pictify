import React from 'react'
import { stepsData } from '../assets/assets'

function Steps() {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center my-20'>
        <h1 className='text-3xl sm:text-4xl mb-2'>How it works</h1> 

        <p className='text-lg text-gray-600 text-center'>Transform Words into stunning images</p>

        <div className='space-y-4 w-full max-w-xl text-sm mt-5'>
            {
                stepsData.map((item, idx) => (
                    <div className='flex items-center gap-4 p-2 px-8 bg-white shadow-md rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300' key={idx}>
                        <img width={40} src={item.icon}/>
                        <div className='max-w-[450px] sm:max-w-md'>
                            <h2 className='text-lg font-medium'>{item.title}</h2>
                            <p className='text-gray-500 text-xs'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Steps