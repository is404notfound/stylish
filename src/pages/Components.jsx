import Header from '../components/Header';
import Drawer from '../components/Drawer';
import Carousel from '../components/Carousel';
import List from '../components/List';
import '../components/Drawer';
import '../styles/pages/components.css';
import Img1 from '../assets/glassmorphism-1.png';
import Img2 from '../assets/glassmorphism-2.jpg';
import Img3 from '../assets/glass-morphism-3.jpg';
import Img4 from '../assets/glass-morphism-4.png';
import Img5 from '../assets/glass-morphism-5.jpg';
import Img6 from '../assets/glass-morphism-6.png';


function Components() {
  const items = Array.from({ length: 20 }, (_, i) => `${i + 1}`);

  return (
    <div className="components-container">
      <Header />
      <div className="content-wrapper">
        <div className="left-section">
          <List items={items} />
        </div>
        <div className="right-section">
          <Carousel images={[Img1, Img2, Img3, Img4, Img5, Img6]} />
        </div>
        <Drawer>
          <li>glass morphism</li>
        </Drawer>
      </div>
    </div>
  );
}

export default Components;