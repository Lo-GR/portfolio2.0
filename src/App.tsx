import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { globalConfig } from './utils/globalConfig';
import { getHeight } from './utils/helpers';
import classNames from "classnames";
import { useState, useEffect } from 'react';
import MobileNav from './components/MobileNav/MobileNav';
import Projects from './components/Projects/Projects';
import Background from './components/Background/Background';
import About from './components/About/About';


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const footerHeight: number = globalConfig.footer.height;
  const headerHeight: number = globalConfig.header.height;
  const contentHeight: string = getHeight(footerHeight + headerHeight);

  const [open, setOpen] = useState(false);
  const [heightStyling, setHeightStyling] = useState(contentHeight);

  const location = window.location.pathname;
  // let heightStyling = contentHeight;

  useEffect(() => {
    if (location === '/background') {
      setHeightStyling('h-full')
    }
  }, [location])

  const handleMobileNav = () => {
    setOpen(!open);
  }

  return (
    <div className='md:h-full'>
      <Header open={open} handleOpen={handleMobileNav} />
      <div className={classNames(heightStyling, 'flex flex-row relative')}>
        <BrowserRouter>
          <Nav />
          <MobileNav open={open} handleOpen={handleMobileNav} />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/projects" element={<Projects />} />
            <Route index path="/background" element={<Background />} />
            <Route index path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer linkedinURL="https://www.linkedin.com/in/lo-gr/" email="logan.roth.g@gmail.com" githubURL="https://github.com/Lo-GR" />
    </div>
  );
}

export default App;
