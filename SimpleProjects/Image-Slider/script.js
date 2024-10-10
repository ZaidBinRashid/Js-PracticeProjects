const images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpeg", "images/image4.jpeg", "images/image5.jpeg"];

let imageIndex = 0;

const forwardBtn = document.getElementById("forward-btn");
const backBtn = document.getElementById("back-btn");
const sliderImage = document.getElementById("slider-image");

// Function to update the image
function updateImage(index) {
    sliderImage.src = images[index];
}

// Forward button click event
forwardBtn.addEventListener("click", () => {
    imageIndex = (imageIndex + 1) % images.length; // Loop back to the first image
    updateImage(imageIndex);
});

// Back button click event
backBtn.addEventListener("click", () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length; // Loop to the last image if out of bounds
    updateImage(imageIndex);
});