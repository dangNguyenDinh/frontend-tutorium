import '../assets/css/home.css'
import Find from '../components/FindTutor/Find'
import Footer from '../components/Footer'
import Navbar from '../components/SignupTutor/Navbar'
import HowtoSignUp from '../components/SignupTutor/HowtoSignup'
const Home = () => {
    return (
        <div className='home-overflow'>
                <Navbar />
                <HowtoSignUp />
                <Footer /> 
        </div>
    )
}

export default Home
