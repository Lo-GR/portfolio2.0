import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { globalConfig } from './utils/globalConfig';
import { getHeight } from './utils/helpers';
import classNames from "classnames";
import { useState } from 'react';
import MobileNav from './components/MobileNav/MobileNav';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const footerHeight: number = globalConfig.footer.height;
  const headerHeight: number = globalConfig.header.height;
  const contentHeight: string = getHeight(footerHeight + headerHeight);

  const [open, setOpen] = useState(false);

  const handleMobileNav = () => {
    console.log("opening mobile")
    setOpen(!open);
  }

  return (
    <div className='h-full'>
      <Header open={open} handleOpen={handleMobileNav} />
      <div className={classNames(contentHeight, 'flex flex-row relative')}>
        <BrowserRouter>
          <Nav />
          <MobileNav open={open} />
          <Routes>
            <Route index path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer linkedinURL="https://www.linkedin.com/in/lo-gr/" email="logan.roth.g@gmail.com" githubURL="https://github.com/Lo-GR" />
    </div>
  );
}

export default App;
