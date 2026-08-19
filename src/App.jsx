import React from 'react'

import IntroScreen from './components/IntroScreen'
import Logo from './components/Logo'
import HeroTemplate from './sections/Hero'


const App = () => {
  return (
    <div>
      <IntroScreen/>
      <Logo/>
      <HeroTemplate/>
    </div>
  )
}

export default App