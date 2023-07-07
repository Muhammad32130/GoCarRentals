import React, { useEffect, useState } from 'react'
import svg from '../images/wave-haikei (3).svg'
import CarLocation from './CarLocation'
import Reviews from './Reviews';
import Questions from './Questions';
function Home() {






  return (
    <div>

  <div className='gradient lg:h-[70vh] sm:h-[74vh] 2xl:h-[80vh] -z-10'>


    <div className='absolute w-[100%] sm:bottom-[25%] lg:bottom-[30%] 2xl:bottom-[19%] -z-8 right-0'>
      <img className='w-[100%]' src={svg} alt="" />
    </div>



    <div className='flex items-center justify-center relative sm:h-[60vh] h-[80vh]'>
      <div className='w-[100%] flex justify-center items-center font-medium '>
        <CarLocation />
      </div>
    </div>
  </div>

  <div className='mt-10 flex justify-center text-[#092409c5]'>
    <div className='text-center border-l border-r px-8 sm:px-4 sm:w-1/3'>
      <h1 className='pb-4 sm:text-[12px]'>Why Choose Us?</h1>
      <hr />
      <p className='pt-4 sm:text-[12px] '>
        Our Services are fast reliable and affordable.
      </p>
    </div>
    <div className='text-center border-l border-r px-8 sm:px-4 sm:w-1/3'>
      <h1 className='pb-4 sm:text-[12px]'>Planning a road trip?</h1>
      <hr />
      <p className='pt-4 sm:text-[12px]'>
        Our business offers a wide selection of vehicles suitable for any adventure.
      </p>
    </div>
    <div className='text-center border-l border-r px-8 sm:px-4 sm:w-1/3'>
      <h1 className='pb-4 sm:text-[12px]'>Our Services</h1>
      <hr />
      <p className='pt-4 sm:text-[12px]'>
        We have a great range of cars for an affordable price.
      </p>
    </div>
  </div>

  <Reviews></Reviews>
  <Questions></Questions>
</div>

  )
}

export default Home