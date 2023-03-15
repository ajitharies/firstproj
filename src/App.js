import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signupp from './components/Signupp';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <br>
      </br>
      <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/signup' element={<Signupp/>} ></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
