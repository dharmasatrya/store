/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

/*=============== ACTIVE LINK ===============*/
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

// List of items (replace with actual item data)
const items = [
    { img: 'assets/img/gallery__img1.png', name: 'Pari Durhaka' },
    { img: 'assets/img/gallery__img2.png', name: 'Makima' },
    { img: 'assets/img/gallery__img3.png', name: 'Macan Putih Anggora' },
    { img: 'assets/img/shop_img2.png', name: '3 Tuyul Kecil Ayah' },
    { img: 'assets/img/shop__img1.png', name: 'Cangkul Kuburan' },
];

// Function to simulate the case opening animation
function animateCaseOpening() {
    const caseItemsContainer = document.getElementById('caseItems');
    document.getElementById('caseItems').style.display = '';
    caseItemsContainer.innerHTML = '';

    // Create and animate item elements
    items.forEach(item => {
        const itemElement = document.createElement('article');
        itemElement.classList.add('shop__card', 'case-item');
        itemElement.innerHTML = `
            <img src="${item.img}" alt="image" class="item__img">
            <h3 class="shop__title">${item.name}</h3>
        `;
        caseItemsContainer.appendChild(itemElement);
    });

    // Animation logic
    const totalDuration = 2000;
    const speed = 15;
    let position = 0;

    const interval = setInterval(() => {
        position -= speed;
        caseItemsContainer.style.transform = `translateX(${position}px)`;

        // Reset position and loop through items
        if (Math.abs(position) > (items.length * 25)) {
            position = 100;
        }

        // Stop when the total duration has elapsed
        if (Date.now() - startTime >= totalDuration) {
            clearInterval(interval);
            displayRandomItem()
        }
    });

    const startTime = Date.now();
}

// Function to display a random item after animation
function displayRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    showPopup([selectedItem]);
}

// Button event listener
document.getElementById('openCaseBtn').addEventListener('click', animateCaseOpening);

// Function to show selected item in the popup
function showPopup(selectedItems) {
    const popup = document.getElementById('item-popup');
    const container = document.getElementById('selected-items-container');
    container.innerHTML = ''; // Clear previous items

    selectedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const name = document.createElement('h3');
        name.textContent = item.name;

        card.appendChild(img);
        card.appendChild(name);
        container.appendChild(card);
    });

    popup.style.display = 'block'; // Show the popup
}

// Event listener for close button
document.getElementById('close-popup').onclick = function () {
    document.getElementById('item-popup').style.display = 'none';
    document.getElementById('caseItems').style.display = 'none';
};
