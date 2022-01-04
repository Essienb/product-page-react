import './App.css';
import Navbar from './Navbar/Navbar';
import MainSection from './MainSection/MainSection';
import FooterContainer from './Footer/FooterContainer';



function App() {
  return (
    <div className="App" id="main-container">
        <Navbar />
        <MainSection />
        <FooterContainer />
    </div>
  );
}

export default App;
