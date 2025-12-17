import logo from './logo.svg';
import './App.css'
import Navbar from './Components/Navbar/navbar.js'
import Hero from './Components/Hero/hero.js'
import Disleksija from './Components/StaJeDisleksija/disleksija.js'
import Cilj from './Components/Cilj/cilj.js'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Disleksija/>
    <Cilj/>
    </>
  );
}

export default App;
