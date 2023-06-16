import React from 'react'
import Accord from './Accord'



function Questions() {
  return (
    <div className='mt-60 text-center mb-20'>
        <h1 className='text-[4rem]'>
        Frequently Asked Questions
        </h1>
        <div className='flex justify-center mt-10'>

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

    </div>
  )
}

export default Questions