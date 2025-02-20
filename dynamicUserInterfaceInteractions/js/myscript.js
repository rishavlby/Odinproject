const dropdownButton = document.getElementById("dropdownButton");
        const optionsMenu = document.getElementById("optionsMenu");
        const dropdownItems = document.querySelectorAll(".menu-item");

        // Toggle dropdown menu visibility
        dropdownButton.addEventListener("click", () => {
            if (optionsMenu.style.display === "block") {
                optionsMenu.style.display = "none";
            } else {
                optionsMenu.style.display = "block";
            }
        });

        // Update the dropdown text and close the menu on item click
        dropdownItems.forEach((item) => {
            item.addEventListener("click", () => {
                optionsMenu.style.display = "none";
            });
        });

        // Close dropdown menu if clicked outside
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".dropdown")) {
                optionsMenu.style.display = "none";
            }
        });

const maincontainer = document.getElementById('imagecontainer')
const subcontainer = document.getElementById('imagewrapper')
const forward = document.getElementById('forward')
const reverse = document.getElementById('reverse')

let currentIndex = 0;
const images = document.querySelectorAll('.images');
const totalImages = images.length;

function imagenext() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        subcontainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function imageprevious(){
    if(currentIndex > 0){
currentIndex--;
subcontainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

forward.addEventListener('click', imagenext);
reverse.addEventListener('click', imageprevious);

/*
function showImage(index) {
    const carouselImagesContainer = document.querySelector('.imagewrapper');
    carouselImagesContainer.style.transform = `translateX(-${index * 100}%)`;
    
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Initialize carousel
showImage(currentIndex);
*/