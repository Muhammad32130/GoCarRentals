import React, { useEffect, useState } from 'react'
import svg from '../images/wave-haikei (3).svg'
import CarLocation from './CarLocation'
import Reviews from './Reviews';
import Questions from './Questions';
function Home() {






  return (
    <div>

    <div className='gradient h-[80vh] -z-10'>


    <div className='absolute w-[100%] -z-8 bottom-40 right-0'>
<img className='w-[100%]' src={svg} alt="" />
    </div>


        
      <div className='flex items-center h-[80vh]'>
        <div className='pl-20 w-[100%] flex justify-center font-medium '>
          <CarLocation/>
        </div>
      </div>
    </div>
    <div className='mt-10 flex justify-center text-[#092409c5]'>
      <div className='text-center border-l border-r px-8 '>
<h1 className='pb-4'>Why Choose Us?</h1>
<hr />
<p className='pt-4'>
Our Services are fast reliable and affordable.
</p>
      </div>
      <div className='text-center border-l border-r px-8 '>
<h1 className='pb-4'>Planning a road trip?</h1>
<hr />
<p className='pt-4'>
Our business offers a wide selection of vehicles suitable for any adventure.
</p>
      </div>
      <div className='text-center border-l border-r px-8 '>
<h1 className='pb-4'>Our Services</h1>
<hr />
<p className='pt-4'>
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