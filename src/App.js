import './App.css';
import {Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Hardware from './components/Hardware';
import AddHardware from './components/AddHardware';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/hardware' exact element={<Hardware/>} />
              <Route path='/addhardware' exact element={<AddHardware/>} />
              <Route path='/login' exact element={<Login/>} />
              <Route path='/signup' exact element={<Signup/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
