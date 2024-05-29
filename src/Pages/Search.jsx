import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Autocomplete, FormControlLabel, FormGroup, Skeleton, Slider, Switch, TextField } from '@mui/material';
import CarLocation from '../components/CarLocation';
import { Label } from '@mui/icons-material';
import { data } from 'autoprefixer';
import Filters from '../components/Filters';

function Search() {
  const [cars, setData] = useState(null)
  const [filter, setfilter] = useState(false)
  const [filtercars, setfiltercars] = useState(null)
  const [mpgRange, setMPGRange] = React.useState([0, 50]);
  const [showmore, setshow] = useState(9)
  const [loading, setloading] = useState(true)
  const [type, settype] = useState(null)
  const [Brand, setbrand] = useState(null)
  const [error, seterror] = useState(false)



  useEffect(() => {
    fetch(`https://carapi-production-506e.up.railway.app/cars${type ? `${type}` : ``}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(parsedData => {
        if (Brand) {
          setloading(true)
          const res = []
          parsedData.forEach(obj => {
            if (obj.brand === Brand) {
              res.push(obj)
            }
          }
          )
          if (res.length < 1) {
            seterror(true)
          } else { seterror(false) }
          setData(res)


        } else {
          seterror(false)
          setloading(true)
          setData(parsedData);
        }


        setTimeout(() => {
          setloading(false)
        }, 700);
      })
      .catch(error => {
        seterror(error)
      });
  }, [type, Brand, error])
  useEffect(() => {
    setfilter(false)
    setTimeout(() => {

      setloading(true)
    }, 700);
  }, [type])

  useEffect(() => {
    const filteredCars = cars?.filter(car => {
      const cityMPG = parseInt(car.citympg);
      const highwayMPG = parseInt(car.highwaympg);
      const minMPG = mpgRange[0];
      const maxMPG = mpgRange[1];

      return (cityMPG >= minMPG && cityMPG <= maxMPG) || (highwayMPG >= minMPG && highwayMPG <= maxMPG);
    })
    setfiltercars(filteredCars)


  }, [mpgRange])

  function viewMore() {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 200);
  
    setshow(showmore + 3);
  }





  return (
    <div>


      {/* <div onClick={() => { setfilter(true) }} className='text-black cursor-pointer '>
        <div className='flex items-center justify-center'>
          <svg className='text-blue-500 mr-2' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path fill="#0059ff" d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>
          <h2 className='text-[24px] text-[#0059ff]'>

            Filters
          </h2>

        </div>
      </div> */}
      {/* <div onClick={() => { setfilter(false) }} className={`${!filter && "hidden"} transition-all w-[85%] bg-[rgba(60,60,60,0.3)] fixed right-0 h-[100vh] z-10 `}> */}
      {/* </div> */}

      <div className='flex flex-col justify-center items-center'>

        <CarLocation></CarLocation>
<Filters filter={filter} setfilter={setfilter} settype={settype} setbrand={setbrand} mpgRange={mpgRange} setMPGRange={setMPGRange} />
        <div className='flex justify-center w-[90%] mt-[3rem] flex-wrap items-center'>
          {!error ? !loading ? (
            (mpgRange[0] === 0 && mpgRange[1] === 50 ? cars : filtercars)?.slice(0, showmore).map((items) => {
              if(!items){
                seterror(true)
              }
              return <Card items={items}></Card>;
            })
          ) : (
            <>
              <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={426} height={462}></Skeleton>
              <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={426} height={462}></Skeleton>
              <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={426} height={462}></Skeleton>
              <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={426} height={462}></Skeleton>
              <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={426} height={462}></Skeleton>
              <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={426} height={462}></Skeleton>
            </>
          )
            :
            <h1 className='text-[32px]'>Sorry no cars found in our Inventory, Maybe try <span onClick={() => { setfilter(true) }} className='slide hover:cursor-pointer'>
              switching the filters?
            </span>
            </h1>

          }

        </div>
        {cars?.length !==0 && cars?.length > showmore &&
          <div className='w-[100%] flex justify-center'>

          <button onClick={() => viewMore()} className='w-[8%] py-4 bg-[#ff2727d7] my-6 rounded-md text-white'>Show More</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Search
