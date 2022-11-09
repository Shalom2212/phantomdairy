import { Routes,Route } from 'react-router-dom';
import Login from "./components/login"
import Signup from "./components/signup"
import Display from './components/display';
import Typepad from './components/typepad';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Display/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/typepad' element={<Typepad/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>

  );
}

export default App;
