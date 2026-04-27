import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <Link to="/">Intro</Link>
      <Link to="/#idols">Idol Profiles</Link>
      <Link to="/#menu">Food & Drink</Link>
      <Link to="/#directory">Directory</Link>
    </nav>
  )
}

export default Navigation