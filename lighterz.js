const slider = document.querySelector('.container-images');
const slides = document.querySelectorAll('.lighterz-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Move to the next slide
function goToNextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
}

// Move to the previous slide
function goToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop back to the last slide
    }
    updateSliderPosition();
}

// Update the slider's position
function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Add event listeners to buttons
prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);