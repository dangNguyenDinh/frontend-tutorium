import '../assets/css/home.css'

import Footer from '../components/Footer'
import Navbar from '../components/SignupTutor/Navbar'
import TutorRegister from '../components/Tutoregister/Main'
const Home = () => {
    return (
        <div className='home-overflow'>
                <Navbar />
                <TutorRegister />

        </div>
    )
}

export default Home
