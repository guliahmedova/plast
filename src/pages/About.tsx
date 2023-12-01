import AboutUs from "../components/common/AboutUs";
import SecondaryHero from "../components/common/SecondaryHero";
import aboutUs from '../assets/images/aboutUs.svg';
import abs2 from '../assets/images/Rectangle 420.svg';

const About = () => { 
  return (
    <>
      <SecondaryHero title="Haqqımızda məlumat" subTitle1="Ana səhifə" subTitle2="Haqqımızda" />
      <AboutUs order="1" img={aboutUs} title="Nə işlə məşğul oluruq" />
      <AboutUs order="-1" img={abs2}
        title="Nə işlə məşğul oluruq" 
        marginTop="200px"
        margin="auto"
        marginRight="0"
        marginBottom="200px"
        top="239px"
        left="-26px"
      />
    </>
  )
}

export default About;