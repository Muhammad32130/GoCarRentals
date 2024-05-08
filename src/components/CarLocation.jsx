import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Autocomplete, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import FindUser from './FindUser';





function CarLocation() {
  const [nearest, setnearest] = useState(null)
  const [selected, setselected] = useState(null)
  if (selected) {
    localStorage.setItem("Nearest", selected !== "Near me" ? selected : nearest?.name)
  }



  const location = localStorage.getItem("Nearest")






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

  function handleChange(e) {
    setselected(e.target.outerText)
  }
  return (
    <div className='text-[#00000099] w-[90%] sm:mt-28 max-[1024px]:w-[90%] ' >
      <div className='bg-[rgb(247,247,247)] flex  items-center justify-around py-6 px-4  rounded-full'>
          <>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              sx={{ width: 400 }}
              options={airports}
              onChange={handleChange}
              autoHighlight
              value={location !== "undefined" ? location : selected}
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


          <LocalizationProvider dateAdapter={AdapterDayjs}  >
            <DemoContainer components={['DatePicker', 'DatePicker']}  >
              <div className='2xl:flex sm:flex text-center '>
                <DatePicker className='h-10' label="Pickup Date" defaultValue={dayjs()} minDate={dayjs()} />
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

          <div className='flex items-center'>
            <a className='bg-[#593CFB] px-3 py-3 rounded-full hover:scale-110 transition-all' href="/search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" aria-labelledby="searchIconLabel" class="seo-pages-1iuz9hb" role="img" version="1.1">
  <path fill="#FFFFFF" stroke="#FFFFFF" d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z"></path>
</svg>
            </a>
            </div>
            {selected === "Near me" &&
              <FindUser setnearest={setnearest}></FindUser>
            }

      </div>
    </div>
  )
}

export default CarLocation