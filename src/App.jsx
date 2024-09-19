import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// External Libs
import AnimatedCursor from "react-animated-cursor"

// Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerStyle={{
          border: '3px solid #fff',
        }}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <a id='home'></a>
      <Navbar />
      <Hero />
      <a id='skills'></a>
      <Skills />
      <a id="about"></a>
      <About />
      <a id="experience"></a>
      <Portfolio />
      <a id="contact"></a>
      <Contact />
    </>
  )
}

export default App
