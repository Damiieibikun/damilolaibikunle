import './App.css'
import Aboutme from './components/Aboutme'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {   
  return (
    <>
    <Nav/>
    <Hero/>  
    <Aboutme/>
    <Skills/>
    <Projects/>
    <Articles/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App
