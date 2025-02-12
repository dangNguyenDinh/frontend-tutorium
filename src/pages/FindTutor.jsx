import '../assets/css/home.css'
import Find from '../components/FindTutor/Find'
import Footer from '../components/Footer'
import NavbarAfter from '../components/NavbarAfter'
import Sort from '../components/Sort'
const Home = () => {
    return (
        <div className='home-overflow'>
                <NavbarAfter />
                <Sort/>
                <Find/>
                <Footer /> 
        </div>
    )
}

export default Home
