
import './App.css';
import NavbarOne from './component/NavbarOne';
import NavbarTwo from './component/NavbarTwo';
import CarouselOne from './component/CarouselOne';
import Banner from './component/Banner';
import Diliverys from './component/Deliverys';
import Section from './component/Section';
import Footer from './component/Footer';
function App() {
  const listCard = [
    {
      img: "../images/banner_1.jpg",
      content: "WOMENT'S"
    },
    {
      img: "../images/banner_2.jpg",
      content: "ACCESSORIES'S"
    },
    {
      img: "../images/banner_3.jpg",
      content: "MEN'S"
    },
  ]
  return (
    <div className="App">
      <NavbarOne />
      <NavbarTwo />
      <CarouselOne />
      <Banner listCard={listCard} />
      <Diliverys />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
