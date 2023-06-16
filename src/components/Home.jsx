import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './Nav';
import car from '../images/iris_copy.png'
import svg from '../images/wave-haikei (3).svg'

function Home() {
//     const [data, setData] = useState(null)
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//               const response = await axios.get('https://api.api-ninjas.com/v1/cars?limit=10&model=A', {
//                 headers: {
//                   'X-API-Key': 'lw6DCLR3vHdJArevbkSgzO2QheuLrVyaXmpHsibD',
//                 },
//               });
//               setData(response.data);
//             } catch (error) {
//               console.error(error);
//             }
//           };
      
//           fetchData();
//       }, []);
// console.log(data);

// Do we offer military discounts ?
// Do I need my own insurance 
// what happens if i get in an accident?
// What are your business fees.
  return (
    <div>

    <div className='gradient h-[80vh] -z-10'>
        <Nav/>


    <div className='absolute w-[100%] -z-8 bottom-40 right-0'>
<img className='w-[100%]' src={svg} alt="" />
    </div>


        
      <div className='flex items-center h-[80vh]'>
        <div className='pl-20 font-medium '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit debitis. Ea eligendi, nemo iusto harum ex accusamus pariatur at quis nisi, molestias in sapiente laudantium porro recusandae! Cumque, soluta.
        </div>
        <img className='w-[50%]  ' src={car} alt="" />
      </div>
    </div>
    <div className='mt-10 flex justify-center text-[#092409c5]'>
      <div className='text-center border-l border-r px-8 '>
<h1 className='pb-4'>Why Choose Us?</h1>
<hr />
<p className='pt-4'>
Our Services are fast reliable and affordable.
</p>
      </div>
      <div className='text-center border-l border-r px-8 '>
<h1 className='pb-4'>Planning a road trip?</h1>
<hr />
<p className='pt-4'>
Our business offers a wide selection of vehicles suitable for any adventure.
</p>
      </div>
      <div className='text-center border-l border-r px-8 '>
<h1 className='pb-4'>Our Services</h1>
<hr />
<p className='pt-4'>
We have a great range of cars for an affordable price.
</p>
      </div>
    
    </div>
    </div>
  )
}

export default Home