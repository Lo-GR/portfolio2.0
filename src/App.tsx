import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { globalConfig } from './utils/globalConfig';
import { getHeight } from './utils/helpers';
import classNames from "classnames";

function App() {
  const footerHeight: number = globalConfig.footer.height;
  const headerHeight: number = globalConfig.header.height;
  const contentHeight: string = getHeight(footerHeight + headerHeight);

  return (
    <div className='h-full'>
      <Header />
      <div className={classNames(contentHeight, 'flex flex-row relative')}>
        <Nav />
        <Main />
      </div>
      <Footer linkedinLink="https://www.linkedin.com/in/lo-gr/" />
    </div>
  );
}

export default App;
