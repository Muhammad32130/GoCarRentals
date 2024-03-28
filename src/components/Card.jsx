import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

function Card({items}) {
 
    const calculateRentalPrice = (items) => {

        const basePrice = 50;
        let priceMultiplier = 1.5; 
        if(items.combination_mpg < 15){
            priceMultiplier = 8
        }
        const rentalPrice = basePrice + (priceMultiplier * items?.combination_mpg);

        return rentalPrice.toFixed(2);
      };
      const rentalPrice = calculateRentalPrice(items)

  return (
    <div className="w-[calc(100%/3)] mx-4  max-h-[464px] sm:w-[85%] xl:w-[60%] 2xl:w-[40%] 3xl:w-[30%] border rounded my-4 flex flex-col items-center ">
    <div className="w-[90%] mt-10 object-contain">
        {items.imageUrl ?
            <img className='h-[326px] object-cover	' src={items.imageUrl} alt="" />
: <Skeleton width={550} height={300} variant='rectangular'></Skeleton>
        }
    </div>
<div className='w-[90%] flex justify-between'>
    <div >

    <h1 className='mt-4'>
        {items.name}
    </h1>
    <h1 className='mt-4'>
       Fuel Type: {items.fuel_type?.toUpperCase()}
    </h1>
    
    </div>
    <div className='mt-4 text-center'>
        <h1>
        Rental Price: ${Math.floor(parseFloat(items.price.replace(/[$,]/g, "")) / 365)+".99"}
        </h1>
        <Link to={`/car/${items._id}`}>
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






