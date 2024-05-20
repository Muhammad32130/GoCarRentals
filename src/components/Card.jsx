import { Skeleton } from "@mui/material";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

function Card({ items }) {
  const calculateRentalPrice = (items) => {
    const basePrice = 50;
    let priceMultiplier = 1.5;
    if (items.combination_mpg < 15) {
      priceMultiplier = 8;
    }
    const rentalPrice = basePrice + priceMultiplier * items?.combination_mpg;

    return rentalPrice.toFixed(2);
  };
  const rentalPrice = calculateRentalPrice(items);

  return (
    <Link to={`/car/${items._id}`} className="mx-4 flex-auto max-w-[450px] max-h-[350px] border rounded my-4 flex flex-col items-start hover:cursor-pointer ">
        {items.imageUrl ? (
          <LazyLoad  offset={100}>

          <img className="aspect-video" src={items.imageUrl} alt="" />
          </LazyLoad>
          ) : (
            <Skeleton width={550} height={300} variant="rectangular"></Skeleton>
            )}
      <div className="w-[100%] px-4 bg-white flex justify-between">
        <div>
          <h1 className="mt-4">{items.name}</h1>
          <h1 className="mt-4">Fuel Type: {items.fuel_type?.toUpperCase()}</h1>
        </div>
        <div className="mt-4 text-center">
          <h1>
            Rental Price: $
            {Math.floor(parseFloat(items.price.replace(/[$,]/g, "")) / 365) +
              ".99"}
          </h1>
          <Link to={`/car/${items._id}`}>
            <button className="bg-[#D87F5A] my-2 py-2 px-4 hover:bg-[green] transition-all text-[white] rounded text-center">
              View Deal
            </button>
          </Link>
   
        </div>
      </div>
    </Link>
  );
}

export default Card;
