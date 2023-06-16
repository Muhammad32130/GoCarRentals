import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Rating } from '@mui/material'

function Reviews() {
   
    var items = [
        {
            name: "Hendrikje Harlow",
            title:"A Hassle-Free Experience with GoCar - My Go-To Choice!",
            description: "Hey folks, I just wanted to share my fantastic experience with GoCar, and let me tell you, it was a game-changer for my recent trip! From start to finish, renting a car has never been so smooth and hassle-free."
        },
        {
            name: "Rhea Larysa",
            title:"A Fantastic Journey with DriveWise Rentals - Unforgettable Memories!",
            description: "It was like having a trusted friend guiding me through the process. The website design is modern and intuitive, making it a breeze to search for and compare different car options. I appreciated the detailed descriptions, photos, and even customer reviews that helped me make an informed decision."
        },
        {
            name: "Alix Kanon",
            title:"Unlocking the Road to Unforgettable Adventures!",
            description: "Booking my rental was a breeze. DriveWise Rentals' website is user-friendly, ensuring a seamless process from start to finish. No hidden fees or unexpected surprises. Plus, their confirmation email provided all the necessary details, making me feel well-informed and ready for my adventure."
        }
    ]


  return (
    <div className='flex flex-col'>
        <h1 className=' mt-20 ml-40 text-[40px] font-bold'>
        Reviews
        </h1>
        <div className='text-center mt-20'>
        <Carousel navButtonsAlwaysInvisible >
        {items.map((item, index) => (
        <Paper className='text-start ml-60 mb-2 w-[50%]' key={index}>
          <h2 className='text-[24px] px-4'>{item.name}</h2>
          <h2 className='text-[22px] px-4 mb-4 font-semibold'>{item.title}</h2>
          <p className='px-4'>{item.description}</p>
          <Rating name="half-rating-read" className='pl-4 mt-2' defaultValue={5} precision={0.5} readOnly  />
        </Paper>
      ))}
        </Carousel>
        </div>
    </div>
  )
}

export default Reviews