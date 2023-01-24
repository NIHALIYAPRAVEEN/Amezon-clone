import './App.css';
import Beauty from './components/Beauty';
import Bestseller from './components/Bestseller';
import Freq from './components/Freq';
import Grocery from './components/Grocery';
import Navbar from './components/Navbar';
import NavbarFooter from './components/NavbarFooter';
import Product from './components/Product';
import Productss from './components/Productss';
import Recomand from './components/Recomand';
import Related from './components/Related';
import Repurchage from './components/Repurchage';
import Sliders from './components/Sliders';
import TodayDeals from './components/TodayDeals';
import Prduct3 from './components/Prduct3';
import Product4 from './components/Product4';
import Siignn from './components/Siignn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <NavbarFooter/>
    <Sliders/>
    <Product/>
     <TodayDeals/>
    <Freq/>
    <Related/>
    <Productss/>
    <Grocery/>
    <Repurchage/>
    <Prduct3/>
    <Beauty/>
    <Recomand/>
    <Product4/>
    <Bestseller/>
    <Siignn/>
    <Footer/>
 
    </div>
  );
}

export default App;
