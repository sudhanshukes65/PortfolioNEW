import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
