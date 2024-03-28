import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Autocomplete, FormControlLabel, FormGroup, Skeleton, Slider, Switch, TextField } from '@mui/material';

function Search() {
  const [cars, setData] = useState(null)
  const [filter, setfilter] = useState(false)
  const [year, setyear] = useState(2023)
  const [mpgRange, setMPGRange] = React.useState([0, 50]);
  
  useEffect(() => {
    fetch('https://carapi-production-506e.up.railway.app/cars')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json(); 
        })
        .then(parsedData => {
            setData(parsedData.slice(0, 9)); 
            console.log(parsedData); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);
  
  
  
  
  const handleChange = (event, newValue) => {
    setMPGRange(newValue);
  };

  
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
   

    return (
      <div>
       
        
      <div onClick={()=>{setfilter(true)}} className='sm:absolute 2xl:hidden z-20 w-[100%]'>
      Filters
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
      
      </div>
    <div className={`flex ${filter ? 'translate-x' : "translate-x-[-100%]"} transition-all sm:bg-[#e9e6e6]  border flex-col fixed h-[100%]  justify-evenly items-center`}>
      <div onClick={()=>{setfilter(false)}} className='sm:absolute top-[2%] 2xl:hidden right-[8%]'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </div>
        <div className='mx-6 sm:mt-20'>
        Filter:
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label="Select a Make" />}
      />
      </div>
<hr className='w-[90%]' />
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
      onChange={handleChange}
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
    <div className='flex justify-center pt-[100px] items-center flex-wrap mx-4 max'>
{cars && cars.map((items)=>{

  return(
    <Card year={year} items={items}></Card>
    )

  })
}
  </div>
 </div>
  )
}

export default Search