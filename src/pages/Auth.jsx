import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarAfter from '../components/NavbarAfter'
import Login from '../components/Auth/Login'
import Footer from '../components/Footer'
import '../assets/css/home.css'
import Signup from '../components/Auth/Signup'
const Home = () => {
    return (
        <div className='home-overflow'>
          
                <NavbarAfter />
                <Login/>
             
                <Footer />
          
        </div>
    )
}

export default Home
