import { Skeleton } from '@mui/material';
import { useEffect, } from 'react';
import { Link, useParams } from 'react-router-dom';

function Card({data,year,model, items, handleSearch}) {

    
useEffect(()=>{
    
if(model){
    handleSearch(model + " car")
}
else if(!model){
    handleSearch(items.make + " " + items.model + " car")
}


},[model,year])
    

    const calculateRentalPrice = (items) => {


        // Define your price calculation algorithm here
        // Adjust the formula based on your specific pricing criteria
        const basePrice = 50; // Adjust this value as needed
        let priceMultiplier = 1.5; // Adjust this value as needed
        if(items.combination_mpg < 15){
            priceMultiplier = 8
        }
        const rentalPrice = basePrice + (priceMultiplier * items?.combination_mpg);

        return rentalPrice.toFixed(2); // Round to 2 decimal places
      };
      const rentalPrice = calculateRentalPrice(items)

  return (
    <div className="w-[calc(100%/3)] border rounded my-4 flex flex-col items-center  h-[calc(100%/2)]">
    <div className="w-[90%] mt-10 object-contain">
        {items.urls ?
            <img className='' src={items.urls} alt="" />
: <Skeleton width={550} height={300} variant='rectangular'></Skeleton>
        }
    </div>
<div className='w-[90%] flex justify-between'>
    <div >

    <h1 className='mt-4'>
        {items.year} {items.make} {items.model}
    </h1>
    <h1 className='mt-4'>
       Fuel Type: {items.fuel_type?.toUpperCase()}
    </h1>
    
    </div>
    <div className='mt-4 text-center'>
        <h1>
        Rental Price: ${rentalPrice}
        </h1>
        <Link to={`/car/${items.id}`}>
        <button className='bg-[#D87F5A] my-2 py-2 px-4 hover:bg-[green] transition-all text-[white] rounded text-center'>
            View Deal 
        </button>
        </Link>
    </div>
</div>
        
    </div>
  )
}

export default Card






