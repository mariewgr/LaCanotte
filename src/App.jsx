import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Rates from './components/Rates'
import Contact from './components/Contact'
import Activities from './components/Activities'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/LaCanotte">
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Facilities />
        <Rates />
        <Location />
        <Contact />
        <Gallery />
        <Footer />
      </div>
    </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
