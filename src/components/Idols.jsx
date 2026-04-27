import React from 'react'
import { Link } from 'react-router-dom'
import './Idols.css'

function Idols({ idols }) {
  return (
    <section id="idols">
      <h2>Our Idol Profiles</h2>
      <div id="idol-grid" className="idol-grid">
        {idols.map(([name, breed, gender, img], index) => (
          <Link
            key={name}
            to={`/dogs/${name.toLowerCase()}`}
            className="idol-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={`/idol_img/${img}`} alt={name} />
            <div className="idol-info">
              <h3>{name}</h3>
              <p><strong>{breed} • {gender}</strong></p>
              <p>Adorable {breed.toLowerCase()} full of personality and ready for cuddles.</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Idols