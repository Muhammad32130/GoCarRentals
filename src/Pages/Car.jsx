import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Car({data}) {
    const [currentCar, setcar] = useState(null)
const { id } = useParams()
if(data){
    const car = data.find(car => car.id == id)
    const obj = JSON.stringify({car})
    localStorage.setItem('obj', obj)
}
useEffect(()=>{
    const {car} = JSON.parse(localStorage.getItem('obj'))

    setcar(
        car
        )
    },[])
console.log(currentCar)

  return (
    <div>
        <div className='h-20 bg-black'></div>
        
        
        


    </div>
  )
}

export default Car