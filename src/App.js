import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutSection from './components/about-section/AboutSection';
import ServicesSection from './components/services-section/ServicesSection';
import Contact from './components/contact/Contact';
import Orders from './components/orders/Orders';
import OrderDetails from './components/orderdetails/OrderDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutSection/>}/>
          <Route path='services' element={<ServicesSection/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/order-details' element={<OrderDetails/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
