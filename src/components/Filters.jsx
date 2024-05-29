import { Autocomplete, Slider, TextField } from '@mui/material';
import React from 'react'

function Filters({filter, setfilter, setbrand, settype, mpgRange, setMPGRange}) {
    const options = [
        { value: null, label: "All Cars" },
        { value: "Mazda", label: "Mazda" },
        { value: "Porsche", label: "Porsche" },
        { value: "BMW", label: "BMW" },
        { value: "Toyota", label: "Toyota" },
        { value: "Hyundai", label: "Hyundai" },
        { value: "Honda", label: "Honda" },
        { value: "Subaru", label: "Subaru" },
        { value: "Mercedes-Benz", label: "Mercedes-Benz" },
        { value: "Jaguar", label: "Jaguar" },
        { value: "Ford", label: "Ford" },
        { value: "Nissan", label: "Nissan" },
        { value: "Jeep", label: "Jeep" },
        { value: "Lexus", label: "Lexus" },
        { value: "Audi", label: "Audi" },
        { value: "McLaren", label: "McLaren" },
        { value: "Chevrolet", label: "Chevrolet" },
        { value: "Volkswagen", label: "Volkswagen" },
        { value: "Chrysler", label: "Chrysler" },
        { value: "Rolls-Royce", label: "Rolls-Royce" },
        { value: "GMC", label: "GMC" },
        { value: "Kia", label: "Kia" },
        { value: "Ram", label: "Ram" },
        { value: "Dodge", label: "Dodge" },
        { value: "Mercedes-AMG", label: "Mercedes-AMG" },
        { value: "Tesla", label: "Tesla" }
      ];
    
      const types = [
        { value: null, label: "All Types" },
        { value: "/truck", label: "Trucks" },
        { value: "/economy", label: "Economy" },
        { value: "/luxury", label: "Luxury" },
        { value: "/sports", label: "Sports" },
        { value: "/minivan", label: "Minivan" },
        { value: "/van", label: "Vans" },
        { value: "/electric", label: "Electric" }
      ];
  return (
    <div className={`flex mt-2 py-4 rounded-md border justify-around w-[70%] items-center z-10`}>
    
    <div className='flex items-center'>
        <h1 className='font-light mr-2'>

        Select your Make:
        </h1>
      <Autocomplete
        onChange={(event, newValue) => setbrand(newValue?.value)}
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 180 }}
        renderInput={(params) => <TextField {...params} label="Make" />}
      />
    </div>
    <div className='flex items-center'>
        <h1 className=' font-light mr-2'>

Type of Car:
        </h1>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={types}
        onChange={(event, newValue) => settype(newValue?.value)}
        sx={{ width: 180 }}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />
    </div>

    <div className='w-[20%] font-thin'>
      MPG Range:
      <Slider
        value={mpgRange}
        min={0}
        max={50}
        step={1}
        valueLabelDisplay="auto"
        aria-labelledby="mpg-range-slider"
        onChange={(event, newValue) => {
          setMPGRange(newValue);
        }}
      />
    </div>

  </div>
  )
}

export default Filters