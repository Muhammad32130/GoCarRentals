import camaro from '../images/2019-chevrolet-camaro-2-0t-1le-6mt-106-1539790974.jpg'
function Card({data, items}) {
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
    <div className="w-[calc(100%/3)] flex flex-col items-center bg-[red] h-[calc(100%/2)]">
    <div className="w-[90%] mt-10 object-contain">
    <img className='' src={camaro} alt="" />
    </div>
<div className='w-[90%] flex justify-between'>
    <div >

    <h1 className='mt-4'>
        {items.year} {items.make} {items.model}
    </h1>
    <h1 className='mt-4'>
       Fuel Type: {items.fuel_type.toUpperCase()}
    </h1>
    
    </div>
    <div className='mt-4'>
        <h1>
        Rental Price: ${rentalPrice}
        </h1>
    </div>
</div>
        
    </div>
  )
}

export default Card






