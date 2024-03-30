import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Support from './Components/Support'
import Allinone from './Components/Allinone'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <About/>
      <Support/>
      <Allinone/>
      <Pricing/>
      <Footer/>

    </div>
  )
}

export default App