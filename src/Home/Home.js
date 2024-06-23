import '../Home/Home.css'
import logo from '../images/finalLogo.png'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <img className='homePageLogo' alt="homePageImage" src={logo}/>
            <div className="home-buttons">
                <NavLink className="button homeButton" to="/About">LEARN ABOUT ME</NavLink>
                {/* <NavLink className="button home-button" to="/work">SEE MORE OF MY WORK</NavLink> */}
            </div>
        </div>
    )
}

export default Home;
