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
