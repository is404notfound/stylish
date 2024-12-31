import logo from '../assets/logo.svg';
import '../styles/Home.css';
import '../assets/thread-not.png'
import cloudy01 from '../assets/cloud01.png';
import cloudy02 from '../assets/cloud02.png';
import cloudy03 from '../assets/cloud03.png';
import cloudy04 from '../assets/cloud04.png';
import cloudy05 from '../assets/cloud05.png';
import cloudy06 from '../assets/cloud06.png';


function Home() {
    return (
        <div className="container">
            <div class="circle-container">
                <div class="animated-circle"></div>
            </div>
            <div className="cloud">
                <img src={cloudy01} alt="cloud1" className="cloud-img cloud1" />
                <img src={cloudy02} alt="cloud2" className="cloud-img cloud2" />
                <img src={cloudy03} alt="cloud3" className="cloud-img cloud3" />
                <img src={cloudy04} alt="cloud4" className="cloud-img cloud4" />
                <img src={cloudy05} alt="cloud5" className="cloud-img cloud5" />
                <img src={cloudy06} alt="cloud6" className="cloud-img cloud6" />
            </div>
        </div>
    );
}

export default Home;
