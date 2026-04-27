import React from 'react'
import './Menu.css'

function Menu({ menu }) {
  const tiers = [
    { key: 'sig_100k', title: 'Signature', price: '100k', className: 'tier-signature' },
    { key: 'pre_90k',  title: 'Premium',   price: '90k',  className: 'tier-premium' },
    { key: 'cla_80k',  title: 'Classic',   price: '80k',  className: 'tier-classic' }
  ]

  return (
    <section id="menu">
      <h2>Food & Drink Menu</h2>

      {/* Ice Cream Tiers */}
      <div id="ice-cream-tiers">
        {tiers.map(tier => (
          <div key={tier.key} className={`tier-section ${tier.className}`}>
            <div className="tier-header">
              <h3>{tier.title}</h3>
              <div className="tier-price">{tier.price}</div>
            </div>
            <div className="ice-grid">
              {menu.ice[tier.key].map(([name, img], index) => (
                <div key={name} className="ice-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img src={`/${img}`} alt={name} />
                  <div className="ice-info">
                    <h4>{name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Drinks */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ color: 'var(--s2)' }}>Drinks</h3>
        <div id="drinks-list" className="drinks-list">
          {menu.drk.map(([name, price]) => (
            <div key={name} className="menu-item">
              <span>{name}</span>
              <span>{price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu