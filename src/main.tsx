import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import WeBuy from './pages/WeBuy.tsx';
import OurProducts from './pages/OurProducts.tsx';
import Devices from './pages/Devices.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Search from './pages/Search.tsx';
import App from './App.tsx';
import './i18n.ts';
import { ModalProvider } from './context/ModalContext.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index={true} element={<Home />} />
    <Route path='/weBuy' element={<WeBuy />} />
    <Route path='/ourProducts' element={<OurProducts />} />
    <Route path='/devices' element={<Devices />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/search' element={<Search />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
