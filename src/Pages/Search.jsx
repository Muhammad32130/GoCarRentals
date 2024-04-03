import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Autocomplete, FormControlLabel, FormGroup, Skeleton, Slider, Switch, TextField } from '@mui/material';

function Search() {
  const [cars, setData] = useState(null)
  const [filter, setfilter] = useState(false)
  const [year, setyear] = useState(2023)
  const [mpgRange, setMPGRange] = React.useState([0, 50]);
  const [showmore, setshow] = useState(9)
  const [loading, setloading] = useState(true)
  const [type, settype] = useState(null)
  
  useEffect(() => {
    fetch(`https://carapi-production-506e.up.railway.app/cars${type !== null ? `${type}` : ''}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json(); 
        })
        .then(parsedData => {
            setData(parsedData); 
            setTimeout(() => {
              setloading(false)
            }, 500);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, [type])
useEffect(()=>{
  setfilter(false)
setloading(true)
},[type])



  
  const options = [
      { value: "BMW", label: "BMW" },
      { value: "chevrolet", label: "Chevrolet" },
      { value: "ford", label: "Ford" },
      { value: "tesla", label: "Tesla" },
      { value: "jeep", label: "Jeep" },
      { value: "cadillac", label: "Cadillac" },
      { value: "gmc", label: "GMC" },
      { value: "toyota", label: "Toyota" },
      { value: "Honda", label: "Honda" },
      { value: "Mercedes", label: "Mercedes" }
    ];

    const types =  [
      { value: "/truck", label: "Trucks" },
      { value: "/economy", label: "Economy" },
      { value: "/luxury", label: "Luxury" },
      { value: "/sports", label: "Sports" },
      { value: "/minivan", label: "Minivan" },
      { value: "/van", label: "Vans" },
      { value: "/electric", label: "Electric" }
    ];
   

    return (
      <div>
       
        
      <div onClick={()=>{setfilter(true)}} className='text-black absolute top-20 left-10 cursor-pointer '>
        <div className='flex items-center justify-center'>
        <svg className='text-blue-500 mr-2' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path fill="#0059ff" d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
<h2 className='text-[24px] text-[#0059ff]'>

      Filters 
</h2>
      
        </div>
      </div>
    <div className={`flex ${filter ? 'translate-x' : "translate-x-[-100%]"} transition-all sm:bg-[#e9e6e6] w-[15%] border flex-col fixed h-[100%]  justify-evenly items-center`}>
      <div onClick={()=>{setfilter(false)}} className='absolute top-20 right-10 hover:cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </div>
        <div className='mx-6 sm:mt-20'>
          Make:
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label="Select a Make" />}
      />
      </div>
      <div>

      Type:
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={types}
      onChange={(event, newValue) => settype(newValue?.value)}
      sx={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label="Type of Car" />}
      />
      </div>
    <div className='w-[80%] '> 
    Year
    <Slider
  size="x-small"
  defaultValue={2023}
  min={2000}
  max={2023}
  onChange={(e)=>{
    setyear(e.target.value)
  }}
  aria-label="year-slider"
  valueLabelDisplay="auto"
/>



  </div>
  <hr className='w-[90%]' />
<div className='w-[80%]'>
MPG Range:
<Slider
      value={mpgRange}
      min={0}
      max={50}
      step={1}
      valueLabelDisplay="auto"
      aria-labelledby="mpg-range-slider"
      />
      </div>
      <hr className='w-[90%]' />
<FormGroup > 
    Transmission
  <FormControlLabel control={<Switch defaultChecked />} label="Manual" />
  <FormControlLabel  control={<Switch />} label="Automatic" />
</FormGroup>
    </div>
    <div onClick={()=>{setfilter(false)}} className={`${!filter && "hidden"} transition-all w-[85%] bg-[rgba(60,60,60,0.3)] fixed right-0 h-[100vh] `}>

    </div>
    <div className='flex justify-center pt-[100px] items-center flex-wrap mx-4 max'>
    {!loading ? (
  cars?.slice(0, showmore).map((items) => {
    return <Card year={year} items={items}></Card>;
  })
) : (
  
  <>
  <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={526} height={462}></Skeleton>
  <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={526} height={462}></Skeleton>
  <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={526} height={462}></Skeleton>
  <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={526} height={462}></Skeleton>
  <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={526} height={462}></Skeleton>
  <Skeleton className='mx-2 my-4' variant="rectangular" animation="wave" width={526} height={462}></Skeleton>
  </>
)}
  </div>
 {cars?.length > showmore && 
 <div className='w-[100%] flex justify-center'>

<button onClick={()=>setshow(showmore + 3)} className='w-[8%] py-4 bg-[#ff2727d7] my-6 rounded-md text-white'>Show More</button>
  </div>
  }
 </div>
  )
}

export default Search