import React, { useEffect, useState } from 'react'
import svg from '../images/wave-haikei_2.svg'
import { useLocation, useParams } from 'react-router-dom';
import { ContactMailSharp } from '@mui/icons-material';
function Car({data}) {
    const [currentCar, setcar] = useState(null)
    const [info, setinfo] = useState(false)
    const {_id} = useParams()


    useEffect(()=>{
        fetch(`https://carapi-production-506e.up.railway.app/carsid/${_id}`)
        .then((res)=>{
            return(res.json())
        }).then(parsedData => {
            setcar(parsedData); 
            console.log(parsedData); 
        })
    },[])

console.log(currentCar)


const calculateRentalPrice = (currentCar) => {
    const basePrice = 50; // Adjust this value as needed
    let priceMultiplier = 1.5; // Adjust this value as needed
    const mpg = currentCar?.mpg.slice(0, 2)
    if(mpg < 15){
        priceMultiplier = 8
    }
    const rentalPrice = basePrice + (priceMultiplier * mpg);

    return rentalPrice.toFixed(2); // Round to 2 decimal places
  };
  const rentalPrice = calculateRentalPrice(currentCar)
  console.log(rentalPrice)
const tax = (10/100*rentalPrice).toFixed(2)
const service = (8 / 100*rentalPrice).toFixed(2)
const total = (parseFloat(tax) + parseFloat(service) + parseFloat(rentalPrice)).toFixed(2)

  return (
    <div className='overflow-x-hidden'>
        <div className='h-20 bg-black'></div>
<div>
    <img src={svg} alt="" />
</div>
    <a href='/search' className='bg-[#141414] absolute bottom-16 rotate-90 py-2 px-4 left-[-1%] text-[white]' >Back</a>
        <div className='flex w-[100%] justify-center items-center  '>
            <div className='flex justify-center w-[100%] '>

            
            <img className='w-[40%] rounded max-h-[600px] object-cover'  src={currentCar?.imageUrl} alt="" />
            <div className='w-[50%] flex items-center border ml-6 pl-6 '>
                <div className='w-[50%] flex flex-col justify-around h-[100%]'>
                <h1 className='text-[22px] capitalize' >
{currentCar?.name}
</h1>
<h1 className='text-[20px] '>
    Drive: {(currentCar?.drive)?.toUpperCase()}

</h1>
<h1 className='text-[20px] '>
MPG: {currentCar?.mpg}
</h1>
<h1 className='text-[20px] '>
    Transmission Type: {currentCar?.transmission == 'a'? "Automatic" : "Manual"}
</h1>
<h1 className='text-[20px]  capitalize'>
    Gas Type: {currentCar?.fuel_type}
</h1>
<div className={`absolute bg-[gray] right-24 py-4 px-2 text-[white] bottom-64 ${info ? "opacity-100": "opacity-0"} transition-all`}>Insurance will be calculated at checkout.</div>
                </div>
                <div className='w-[50%] bg-[#141414] text-[white] flex flex-col justify-around h-[100%] px-6'>
                    <h1>Rental Price: $ {rentalPrice}</h1>
                    <h1>Tax: ${tax}</h1>
                    <h1>Service Fees:{service} </h1>
                    <div className='flex justify-between'>
                    <h1 >Insurance: -- </h1>
                        <button onClick={()=>{setinfo(!info)}} className='pr-2 relative'><svg className='invert' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></button>
                    </div>
                    <div className='flex justify-between'>
                    <h1>
                        Total: {total}
                    </h1>
                    <button onClick={()=>{alert("This feature has not implemented yet!")}} className='bg-[red] px-3 py-1 rounded-sm hover:underline ease-in-out transition-all'>Book Now!</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <h1 className='text-[32px] text-center mt-8'>

            Book Your Car Now!
        </h1>
        
        
        


    </div>
  )
}

export default Car