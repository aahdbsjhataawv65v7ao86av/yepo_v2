import React from 'react'
import './Directory.css'

function Directory() {
  return (
    <section id="directory">
      <h2>Directory</h2>
      <div className="directory-content">
        <div className="info-box">
          <ul>
            <li><strong>Address</strong> 237 Bến Vân Đồn, P. Vĩnh Hội, Quận 4, TP.HCM</li>
            <li><strong>Opening Hours</strong> 10:00 AM – 9:00 PM daily</li>
            <li><strong>Idol Meet Time</strong> 10:00 AM – 2:00 PM &amp; 4:00 PM – 8:00 PM</li>
            <li><strong>Hotline</strong>
              <a href="tel:0961229449" className="phone-link">0961 229 449</a>
            </li>
          </ul>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4460.669250335647!2d106.69356677558858!3d10.759684489388084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f80b790fe71%3A0xfceea42b573d81a4!2sYEPO%20-%20DOG%20%26%20ICE%20CREAM!5e1!3m2!1sen!2s!4v1775639550708!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="YEPO Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Directory