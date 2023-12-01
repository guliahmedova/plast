import AboutUs from "../components/common/AboutUs";
import ContactUs from "../components/common/ContactUs";
import CardContainer from "../components/common/CardContainer";
import PrimaryHero from "../components/home/PrimaryHero";
import Slider from "../components/home/Slider";
import TextSecion from "../components/home/TextSecion";
import aboutUs from '../assets/images/aboutUs.svg';
  
const Home = () => {
  return (
    <>
      <PrimaryHero />
      <TextSecion text="Bİz alırıq !" bgColor="black" />
      <CardContainer />
      <TextSecion text="BİZİM MƏHSULLARIMIZ ." bgColor="white"/>
      <Slider/>
      <TextSecion text="Haqqımızda məlumat ." bgColor="black" />
      <AboutUs order="1" img={aboutUs} title="Biz kimik"/>
      <TextSecion text="BİZİMlə əlaqə ." bgColor="white"/>
      <ContactUs bgColor="black" textColor="gray"/>
    </>
  )
}

export default Home