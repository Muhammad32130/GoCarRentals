import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import NearestAirportFinder from './userLocation';
import { Autocomplete, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';





function CarLocation() {
  const [selected, setselected] = useState(null)
  const airports = [
    "George Bush Intercontinental Airport (IAH)",
    "Atlanta International Airport (ATL)",
    "Los Angeles International Airport (LAX)",
    "O'Hare International Airport (ORD)",
    "Fort Worth International Airport (DFW)",
    "John F. Kennedy International Airport (JFK)",
    "Denver International Airport (DEN)",
    "San Francisco International Airport (SFO)",
    "Miami International Airport (MIA)",
    "McCarran International Airport (LAS)",
    "Orlando International Airport (MCO)",
    "Near me"
  ]
console.log(selected)

  const [nearest, setnearest] = useState(null)
function handleChange(e){
  setselected(e.target.outerText)
}
  return (
    <div className='text-[#00000099] w-[90%] sm:mt-28 max-[1024px]:w-[90%]' >
            <div className='bg-[rgb(216,202,202)] flex flex-col items-center justify-center p-6  rounded-sm'>
        <div className='flex lg:flex-col sm:flex-col 2xl:flex-row items-center justify-center max-[1024px]:w-[100%]'>
  {nearest == null ?
<>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 400 }}
      options={airports}
      onChange={handleChange}
      autoHighlight
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        option === "Near me" ?
        <Box component="li" sx={{ '& > img': { ml: 0, flexShrink: 0 } }} {...props}>
          <span className="location-container mr-4"><svg class="seo-pages-0" data-testid="IconLocationCurrentFilled24" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.18 3.15 3.64 8.82c-1.2.44-1.13 2.16.11 2.5l7.03 1.92 1.89 7.08c.33 1.24 2.06 1.31 2.5.11l5.67-15.62c.38-1.03-.63-2.04-1.66-1.66Z" fill="#121214"></path></svg></span>
          {option}
        </Box> 
        : 
        <Box component="li" sx={{ '& > img': { ml: 0, flexShrink: 0 } }} {...props}>
          <span class="location-container mr-4"><svg class="seo-pages-0" data-testid="IconAirplaneFilled24" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.09 11.62c-.17-1.03-1.14-1.8-2.25-1.8H16.8l-4.52-5.21a.943.943 0 0 0-.72-.33H9.24c-.26 0-.48.13-.61.36a.72.72 0 0 0 .02.71l2.85 4.47H6.12L4.59 7.86a.928.928 0 0 0-.71-.32h-1.4c-.23 0-.43.11-.55.3-.12.19-.14.43-.04.63l2.41 5.14c.16.33.49.55.86.55h6.2l-2.79 4.51c-.13.22-.14.48-.02.7.12.22.35.35.6.35h2.38c.28 0 .54-.12.72-.33l4.54-5.24h3.14a2.173 2.173 0 0 0 2.13-2.54l.03.01Z" fill="#121214"></path></svg></span>
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Where"
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
</>
  :
        <select className='mr-4 py-2 px-2 bg-transparent outline-none border-[#e5e7eb]' id="citySelect">
  <option value="GeorgeBushIntercontinentalAirport(IAH)">{nearest?.name}</option>
</select>
}

        <label className='pr-4' htmlFor="">Date:</label>
        <LocalizationProvider  dateAdapter={AdapterDayjs}  >
      <DemoContainer components={['DatePicker', 'DatePicker']}  >
<div className='2xl:flex sm:flex text-center '>
        <DatePicker className='h-10' label="Pickup Date" defaultValue={dayjs()}  minDate={dayjs()} />
        <DatePicker 
        minDate={dayjs()}
        label="Drop-off Date"
        />
        </div>
      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <div className='2xl:flex sm:flex text-center '>
        <TimePicker
          label="Pickup Time"
          defaultValue={dayjs()}
          minTime={dayjs()}
          />
        <TimePicker
          label="Drop-off Time"
          defaultValue={dayjs('2022-04-17T15:30')}
          />
          </div>
      </DemoContainer>
    </LocalizationProvider>
        </div>
        
        <NearestAirportFinder setnearest={setnearest}></NearestAirportFinder>
  <Link to={"/search"}>
        <button type='submit' className='mt-4 bg-[red] px-4 py-1 rounded-sm' >Submit</button>
  </Link>
          </div>
    </div>
  )
}

export default CarLocation