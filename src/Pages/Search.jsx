import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios';
import Card from '../components/Card'
import { Autocomplete, FormControlLabel, FormGroup, Slider, Switch, TextField } from '@mui/material';

function Search() {
const [year, setyear] = useState(2023)
  const [data, setData] = useState(null)
    const [mpgRange, setMPGRange] = React.useState([0, 50]);

    const handleChange = (event, newValue) => {
      setMPGRange(newValue);
    };
    if(data){

      const price = data[0].combination_mpg *20
      console.log(price)
    }

    const options = [
        { value: "", label: "Select a car maker" },
        { value: "chevrolet", label: "Chevrolet" },
        { value: "ford", label: "Ford" },
        { value: "dodge", label: "Dodge" },
        { value: "tesla", label: "Tesla" },
        { value: "jeep", label: "Jeep" },
        { value: "cadillac", label: "Cadillac" },
        { value: "gmc", label: "GMC" },
        { value: "buick", label: "Buick" },
        { value: "chrysler", label: "Chrysler" },
        { value: "lincoln", label: "Lincoln" }
      ];
    
      



    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`https://api.api-ninjas.com/v1/cars?limit=10&model=A&year=${year}`, {
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
      }, [year]);
console.log(year);
  return (
 <div className=' h-[100vh] bg-[#070404]'>
  <Nav></Nav>
    <div className='flex bg-[red] justify-around items-center'>
        <div>

        Filter:
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Select a Make" />}
      />
      </div>

    <div className='w-[15%] '> 
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
<div className='w-[20%]'>
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
<FormGroup > 
    Transmission
  <FormControlLabel control={<Switch defaultChecked />} label="Manual" />
  <FormControlLabel  control={<Switch />} label="Automatic" />
</FormGroup>
    </div>
    <div className='flex flex-wrap '>

{data && data.map((items)=>{
  return(
    
    <Card data={data} items={items}></Card>
    )
  })
}
  </div>
 </div>
  )
}

export default Search