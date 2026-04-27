let data = {};

// Load data from JSON file
function loadData() {
    return fetch('data.json')
        .then(response => response.json())
        .then(loadedData => {
            data = loadedData;
            return data;
        })
        .catch(error => {
            console.error('Error loading data.json:', error);
        });
}

// Render Idols
function renderIdols() {
    const grid = document.getElementById('idol-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    data.idol.forEach(([name, breed, gender, img], index) => {
        const card = document.createElement('div');
        card.className = 'idol-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="idol_img/${img}" alt="${name}">
            <div class="idol-info">
                <h3>${name}</h3>
                <p><strong>${breed} • ${gender}</strong></p>
                <p>Adorable ${breed.toLowerCase()} full of personality and ready for cuddles.</p>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `dogs/${name.toLowerCase()}.html`;
        });
        grid.appendChild(card);
    });
}

// Render Ice Cream Tiers
function renderIceCream() {
    const container = document.getElementById('ice-cream-tiers');
    if (!container) return;
    
    container.innerHTML = '';

    const tiers = [
        { key: 'sig_100k', title: 'Signature', price: '100k', className: 'tier-signature' },
        { key: 'pre_90k',  title: 'Premium',   price: '90k',  className: 'tier-premium' },
        { key: 'cla_80k',  title: 'Classic',   price: '80k',  className: 'tier-classic' }
    ];

    tiers.forEach(tier => {
        const items = data.menu.ice[tier.key];

        const sectionHTML = `
            <div class="tier-section ${tier.className}">
                <div class="tier-header">
                    <h3>${tier.title}</h3>
                    <div class="tier-price">${tier.price}</div>
                </div>
                <div class="ice-grid">
                    ${items.map(([name, img], index) => `
                        <div class="ice-card" style="animation-delay: ${index * 0.1}s;">
                            <img src="${img}" alt="${name}">
                            <div class="ice-info">
                                <h4>${name}</h4>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.innerHTML += sectionHTML;
    });
}

// Render Drinks
function renderDrinks() {
    const container = document.getElementById('drinks-list');
    if (!container) return;
    
    container.innerHTML = '';

    data.menu.drk.forEach(([name, price]) => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.innerHTML = `
            <span>${name}</span>
            <span>${price.toFixed(2)}</span>
        `;
        container.appendChild(item);
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', function() {
    loadData().then(() => {
        renderIdols();
        renderIceCream();
        renderDrinks();
    });
});
