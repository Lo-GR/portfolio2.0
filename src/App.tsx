import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="h-full">
      <Header />
      <div className="flex flex-row h-full">
        <Nav />
        <Main />  
      </div>
      <Footer />
    </div>
  );
}

export default App;
