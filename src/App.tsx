import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer bgColor={currentPath === '/' ? 'black' : '#F8F8F7'} textColor={currentPath === '/' ? 'white' : 'black'} />
    </>
  )
};

export default App;