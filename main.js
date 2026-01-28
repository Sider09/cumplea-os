// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Confetti Celebration
function celebrate() {
    // Fire confetti from the button position or center
    const duration = 3000;
    const end = Date.now() + duration;

    // Frame-by-frame confetti animation
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff6b6b', '#feca57', '#ff9ff3', '#ffffff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff6b6b', '#feca57', '#ff9ff3', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Also fire a big burst from center
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// Trigger celebration on load after a delay
window.addEventListener('load', () => {
    setTimeout(celebrate, 1000);
});


// Image Modal Functionality
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    // Add simple animation class
    modalImg.style.animation = 'none';
    modalImg.offsetHeight; /* trigger reflow */
    modalImg.style.animation = 'zoomIn 0.3s forwards';

    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}
