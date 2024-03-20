import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './Pages/Search';
import Nav from './components/Nav';
import Car from './Pages/Car';
import { useEffect, useState } from 'react';


function App() {
  const [cars, setData] = useState(null)

useEffect(()=>{
  fetch('https://carapi-production-506e.up.railway.app/cars')
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      return response.json();
  })
  .then(data => setData(data))
  .catch(error => {
      console.error('Error fetching data:', error);
  });
},[])


console.log(cars)


  return (
    <div className="App">
    <Nav></Nav>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/search" element={<Search cars={cars} setData={setData}></Search>}></Route>
<Route path="/car/:id" element={<Car cars={cars}></Car>}></Route>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
