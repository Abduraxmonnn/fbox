// Existing animation code
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Apply animations to key elements
document.querySelectorAll('.stat, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Modal and video functionality
const modal = document.getElementById("videoModal");
const playButton = document.getElementById("playButton");
const video = document.getElementById("productVideo");
const closeBtn = document.getElementsByClassName("close")[0];

playButton.onclick = function () {
    modal.style.display = "block";
    video.play();
}

closeBtn.onclick = function () {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
}

// Add hover effect for video container
const videoContainer = document.querySelector('.video-container');
const productImage = document.querySelector('.product-image');

videoContainer.addEventListener('mouseenter', () => {
    productImage.style.transform = 'scale(1.05)';
});

videoContainer.addEventListener('mouseleave', () => {
    productImage.style.transform = 'scale(1)';
});

document.addEventListener('DOMContentLoaded', function () {
    const partners = [
        {name: 'Mato', image: 'assets/images/partners/mato.jpg'},
        {name: 'OKC', image: 'assets/images/partners/okc.jpg'},
        {name: 'Beta', image: 'assets/images/partners/beta.jpg'},
        {name: 'Bellissimo', image: 'assets/images/partners/bellissimo.jpg'},
        {name: 'Arcazor', image: 'assets/images/partners/archaroz.jpg'},
        {name: 'Akfa', image: 'assets/images/partners/akfa'},
    ];

    const carouselTrack = document.getElementById('partnerCarousel');

    // Function to create partner logo element
    function createPartnerLogo(partner) {
        const img = document.createElement('img');
        img.src = partner.image;
        img.alt = partner.name;
        img.className = 'partner-logo';
        return img;
    }

    // Populate the carousel
    partners.forEach(partner => {
        carouselTrack.appendChild(createPartnerLogo(partner));
    });

    // Clone partners for seamless loop
    partners.forEach(partner => {
        carouselTrack.appendChild(createPartnerLogo(partner));
    });
});