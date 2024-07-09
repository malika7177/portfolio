import './App.css';
import Header from './components/Header/Header';
import Blog from './components/blog/Blog';
import Experience from './components/experience/Experience';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Project from './components/project/Project';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import TrustedBy from './components/trustedBy/TrustedBy';
import servicesData from './data/servicesData';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <TrustedBy/>
      <Services servicesData = {servicesData()}/>
      <Project/>
      <Blog/>
      <Product/>
      <Experience/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
