import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/data.json'
import './DogDetail.css'

function DogDetail() {
  const { dogName } = useParams()
  const [dog, setDog] = useState(null)

  useEffect(() => {
    const foundDog = data.idol.find(([name]) => name.toLowerCase() === dogName.toLowerCase())
    if (foundDog) {
      const [name, breed, gender, img] = foundDog
      setDog({ name, breed, gender, img })
    }
  }, [dogName])

  if (!dog) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <section id="dog-detail-container">
        <Link to="/" className="back-link">← Back to All Dogs</Link>
        <div className="dog-detail-section">
          <div className="dog-detail-image">
            <img src={`/idol_img/${dog.img}`} alt={dog.name} />
          </div>
          <div className="dog-detail-info">
            <h1>{dog.name}</h1>
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Gender:</strong> {dog.gender === 'M' ? 'Male' : 'Female'}</p>
            <p>
              <strong>About {dog.name}:</strong><br />
              {dog.name} is an adorable {dog.breed.toLowerCase()} with lots of personality and endless energy for cuddles!
              Visit YEPO during our meet-and-greet hours to spend quality time with {dog.name}.
            </p>
            <p>
              <strong>Meet & Greet:</strong><br />
              10:00 AM – 2:00 PM & 4:00 PM – 8:00 PM daily
            </p>
            <p>
              <strong>Location:</strong><br />
              237 Bến Vân Đồn, P. Vĩnh Hội, Quận 4, TP.HCM
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DogDetail