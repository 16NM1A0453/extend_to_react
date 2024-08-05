import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import EmojiSearch from './Components/EmojiSearch/EmojiSearch';
import Home from './Components/Home/Home';
import NavBar from './Components/ProjectsNavBar/NavBar';
import SimpleCalc from './Components/SimpleCalculator/SimpleCalc';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <EmojiSearch />
      <SimpleCalc />
      <Contact />
    </div>
  );
}

export default App;
