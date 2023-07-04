import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './Pages/Search';
import Nav from './components/Nav';
import Car from './Pages/Car';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null)
  return (
    <div className="App">
    <Nav></Nav>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/search" element={<Search data={data} setData={setData}></Search>}></Route>
<Route path="/car/:id" element={<Car data={data}></Car>}></Route>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
