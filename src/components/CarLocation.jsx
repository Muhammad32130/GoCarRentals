import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';




function CarLocation() {
  return (
    <div className='text-[#00000099]' >

      
            <div className='bg-[rgb(216,202,202)] flex flex-col items-center justify-center p-6 rounded-sm'>

        <div className='flex items-center '>
        <label className='pr-4' htmlFor="">Pickup Location:</label>
        <select className='mr-4 py-2 px-2 bg-transparent  border-[#e5e7eb]' id="citySelect">
          
  <option value="" disabled selected>Select a location</option>
  <option value="Houston">Houston</option>
  <option value="Sugar Land">Sugar Land</option>
  <option value="Pasadena">Pasadena</option>
  <option value="Pearland">Pearland</option>
  <option value="Baytown">Baytown</option>
  <option value="League City">League City</option>
  <option value="Missouri City">Missouri City</option>
  <option value="Conroe">Conroe</option>
  <option value="Friendswood">Friendswood</option>
  <option value="Galveston">Galveston</option>
</select>
        <label className='pr-4' htmlFor="">Date:</label>

        <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DemoContainer components={['DatePicker', 'DatePicker']}  >
        <DatePicker label="Pickup Date" defaultValue={dayjs()}  minDate={dayjs()} />
        <DatePicker 
        minDate={dayjs()}
        label="Drop-off Date"
        
        />
      </DemoContainer>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <TimePicker
          label="Pickup Time"
          defaultValue={dayjs()}
          minTime={dayjs()}
          />
        <TimePicker
          label="Drop-off Time"
          defaultValue={dayjs('2022-04-17T15:30')}
          />
      </DemoContainer>
    </LocalizationProvider>

        </div>
  <a href="/search">

        <button type='submit' className='mt-4 bg-[red] px-4 py-1 rounded-sm' >Submit</button>
  </a>

          </div>
    </div>
  )
}

export default CarLocation