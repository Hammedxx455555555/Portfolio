// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './pages/Footer/Footer';
import Pricing from './pages/Pricing/pricing';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import About from './pages/About/About'

const App = ()=> {

  return (
    <>

    <Router>
      <Navbar/>
           <Routes>
                 <Route path='/' Component={Home} />
                 <Route path='/about' Component={About} />
                 <Route path='/portfolio' Component={Portfolio}/>
                 <Route path='/pricing' Component={Pricing}/>
                 <Route path='/contact' Component={Contact}/>
                 <Route path='*' Component={Error}/>
           </Routes>
           <Footer/>
    </Router>
    </>
  )
}
export default App;

      
 

