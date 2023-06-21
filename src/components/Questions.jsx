import React, { useEffect } from 'react'
import Accord from './Accord'



function Questions() {


  
  function changeBgColor() {
    const div = document.querySelectorAll('.move')
    document.addEventListener("mousemove", function(event) {
      const x = Math.round((event.clientX / window.innerWidth) * 255);
      const y = Math.round((event.clientY / window.innerHeight) * 255);
      const o = x/270
      console.log(x, y)
      const color = `rgb(${20}, ${20}, 20,${o})`;
      for(let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = color;
      }
    });
  }
  
  useEffect(()=>{
  changeBgColor();

 
},[])




  return (


    
    <div className='mt-60 text-center mb-20 relative'>
        <h1 className='text-[4rem]'>
        Frequently Asked Questions
        </h1>
        <div  className='flex justify-center mt-10'>

        <div className='w-[40%]'>
       <Accord question={'Do you offer military discounts?'} Answer={'Yes We offer military 10% off for Military veterans.'}></Accord>
       <hr />
       <Accord question={'What happens if I get in an accident ?'} Answer={'Imediately contact our roadside assistance team which is available 24/7.'}></Accord>
       <hr />

       <Accord question={'Do I need my own insurance'} Answer={"No you don't need personal insurance to rent our services. We provide insurance with the vehicle. "}></Accord>
       <hr />
       <Accord question={'What are your fees ?'} Answer={'Our fees are Base Rental Rate, Insurace fees, Fuel Charges and Mileage Fees.'}></Accord>
        </div>

        </div>
        
<div className='absolute right-60 bottom-0'>
  <div className='flex'>

  <div className=' move w-20 mt-14 h-6'></div>
  <div className=' move w-6 h-20'></div>
  </div>
</div>
<div className='absolute left-60 top-0'>
  <div className='flex'>

  <div className=' move w-6 h-20'></div>
  <div className=' move w-20 mb-14 h-6'></div>
  </div>
</div>
    </div>
  )
}

export default Questions