// Load and display specific dog details
function getDogNameFromUrl() {
    const path = window.location.pathname;
    const match = path.match(/dogs\/([a-z]+)\.html/i);
    return match ? match[1].toUpperCase() : null;
}

function loadDogDetails() {
    return fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const dogName = getDogNameFromUrl();
            const dog = data.idol.find(([name]) => name.toUpperCase() === dogName);
            
            if (!dog) {
                console.error('Dog not found:', dogName);
                return null;
            }
            
            const [name, breed, gender, img] = dog;
            return { name, breed, gender, img };
        })
        .catch(error => {
            console.error('Error loading dog details:', error);
        });
}

function renderDogDetail(dog) {
    if (!dog) {
        console.error('No dog data to render');
        return;
    }

    const section = document.getElementById('dog-detail-container');
    if (!section) return;

    section.innerHTML = `
        <a href="../index.html" class="back-link">← Back to All Dogs</a>
        <div class="dog-detail-section">
            <div class="dog-detail-image">
                <img src="../idol_img/${dog.img}" alt="${dog.name}">
            </div>
            <div class="dog-detail-info">
                <h1>${dog.name}</h1>
                <p><strong>Breed:</strong> ${dog.breed}</p>
                <p><strong>Gender:</strong> ${dog.gender === 'M' ? 'Male' : 'Female'}</p>
                <p>
                    <strong>About ${dog.name}:</strong><br>
                    ${dog.name} is an adorable ${dog.breed.toLowerCase()} with lots of personality and endless energy for cuddles!
                    Visit YEPO during our meet-and-greet hours (10:00 AM – 2:00 PM & 4:00 PM – 8:00 PM) to spend quality time with ${dog.name}.
                </p>
                <p>
                    <strong>Meet & Greet:</strong><br>
                    10:00 AM – 2:00 PM & 4:00 PM – 8:00 PM daily
                </p>
                <p>
                    <strong>Location:</strong><br>
                    237 Bến Vân Đồn, P. Vĩnh Hội, Quận 4, TP.HCM
                </p>
            </div>
        </div>
    `;
}

window.addEventListener('DOMContentLoaded', function() {
    loadDogDetails().then(dog => {
        renderDogDetail(dog);
    });
});
