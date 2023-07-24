import './App.css';
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import Why from './components/Why.jsx'
import Plans from './components/Plans.jsx'
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Join from './components/Join.jsx'
import Footer from "./components/Footer.jsx"
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <div className="App">

          <Hero />
          <Programs  />
          <Why />
          <Plans id="plans" />
          <Testimonials  />
          <Join  />
          <Footer />

  
            <ScrollToTop 
            top={1000}
            smooth={true}
            color='black' 
            width='16' 
            height='16' />


          

    </div>
  );
}

export default App;
