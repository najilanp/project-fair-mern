import { Route, Routes } from 'react-router-dom';
import './App.css';
import PFHome from './Pages/PFHome'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Footer from './Components/Footer';



function App() {
  return (
    <>
    <Routes>
      <Route path='/'element={<PFHome/>} />
      <Route path='/login'element={<Login/>} />
      <Route path='/register'element={<Register/>} />
      <Route path='/dashboard'element={<Dashboard/>} />
      <Route path='/projects'element={<Projects/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
