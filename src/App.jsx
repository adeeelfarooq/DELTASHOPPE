import React from 'react'

import IntroScreen from './components/IntroScreen'

import HeroTemplate from './sections/Hero'
import Navbar from './sections/Navbar'


const App = () => {
  return (
    <div>
      <IntroScreen/>
      <Navbar/>
      <HeroTemplate/>
    </div>
  )
}

export default App