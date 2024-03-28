import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './Pages/Search';
import Nav from './components/Nav';
import Car from './Pages/Car';

function App() {


  return (
    <div className="App">
    <Nav></Nav>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/search" element={<Search></Search>}></Route>
<Route path="/car/:_id" element={<Car></Car>}></Route>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
