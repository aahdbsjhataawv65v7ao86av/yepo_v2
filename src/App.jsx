import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Idols from './components/Idols'
import Menu from './components/Menu'
import Directory from './components/Directory'
import Footer from './components/Footer'
import DogDetail from './components/DogDetail'
import data from './data/data.json'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />

        <Routes>
          <Route path="/" element={
            <div className="container">
              <section id="intro">
                <h1>Welcome to YEPO</h1>
                <p style={{ fontSize: '1.22rem' }}>
                  A sweet haven in Saigon where adorable dog idols and premium ice cream come together.
                  Enjoy golden treats, fluffy cuddles, and unforgettable moments.
                </p>
                <p>Come for the desserts — stay for the tail wags 🐾🍦</p>
              </section>

              <hr />

              <Idols idols={data.idol} />

              <hr />

              <Menu menu={data.menu} />

              <hr />

              <Directory />
            </div>
          } />
          <Route path="/dogs/:dogName" element={<DogDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App