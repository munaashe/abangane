import './App.css';
import { Routes, Route } from 'react-router-dom';


import Footer from './components//footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import Trustees from './pages/Trustees';
import ContactUs from './pages/ContactUs';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/trustees' exact element={<Trustees/>} />
        <Route path='/contact' exact element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
