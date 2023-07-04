import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios';
import Card from '../components/Card'
import { Autocomplete, FormControlLabel, FormGroup, Skeleton, Slider, Switch, TextField } from '@mui/material';

function Search({data, setData}) {
const [photos, setphotos] = useState([])
const [model, setmodel] = useState(null)


async function handleSearch(make) {
    try {
      
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${make}&client_id=FOxyzvHq-yTfbY8PJDyLr0qkXROl-DLRU97V754r7mM`
        );
        
            
            setphotos(response.data.results)
          
          
          ;
        }
     catch (error) {
      console.error(error);
    }
  };
  
  
  
  const [year, setyear] = useState(2023)
  const [mpgRange, setMPGRange] = React.useState([0, 50]);
  
  const handleChange = (event, newValue) => {
    setMPGRange(newValue);
  };
  if(data){
    
    const price = data[0]?.combination_mpg *20
  }
  
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
    function modelsetter(e){
for( let i=0; i<data.length; i++){
 data[i].urls = undefined;
}
setmodel(e)
    }

    
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.api-ninjas.com/v1/cars?limit=10&make=${model ? model : "A"}&year=${year}`, {
            headers: {
              'X-API-Key': 'lw6DCLR3vHdJArevbkSgzO2QheuLrVyaXmpHsibD',
            },
          });
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchData();
    }, [model,year]);
   
    const urls  = photos.map(photos => photos.urls.full)
    
    if (urls?.length === data?.length) {
      // Loop through the arrays
      for (let i = 0; i < urls.length; i++) {
        // Assign the link to the corresponding object
        data[i].urls = urls[i];
        data[i].id = i;
      }
    }
  
    console.log(data)

    return (
      <div>
  <div className='h-20 bg-[#141414]'></div>
    <div className='flex border flex-col fixed h-[100%]  justify-evenly items-center'>
        <div className='mx-6'>

        Filter:
        <Autocomplete
        onChange={(e) =>{modelsetter(e.target.outerText)}}
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
    <div className='flex items-center flex-col '>

{data && data.map((items)=>{

  return(
    <Card year={year} model={model} photos={photos} handleSearch={handleSearch} data={data} items={items}></Card>
    )

  })
}
  </div>
 </div>
  )
}

export default Search