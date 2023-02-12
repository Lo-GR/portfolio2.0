import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-row">
        <Nav />
        <Main />  
      </div>
      <Footer />
    </div>
  );
}

export default App;
