document.addEventListener("DOMContentLoaded", function () {
    const fulImgBox = document.getElementById("fulImgBox"),
          fulImg = document.getElementById("fulImg"),
          imgGallery = Array.from(document.querySelectorAll(".proyecto-img"));

    let currentIndex = -1;

    function openFulImg(reference) {
        fulImgBox.style.display = "flex";

        const filename = reference.split('/').pop();

        currentIndex = imgGallery.findIndex(img => img.src.includes(filename));

        if (currentIndex === -1) {
            return;
        }

        updateImage();
    }

    function closeImg() {
        fulImgBox.style.display = "none";
    }

    function prevImg() {
        if (imgGallery.length <= 1) return;

        currentIndex = (currentIndex - 1 + imgGallery.length) % imgGallery.length;
        updateImage();
    }

    function nextImg() {
        if (imgGallery.length <= 1) return;

        currentIndex = (currentIndex + 1) % imgGallery.length;
        updateImage();
    }

    function updateImage() {
        if (currentIndex < 0 || currentIndex >= imgGallery.length) {
            return;
        }

        fulImg.src = imgGallery[currentIndex].src;
        const projectCard = imgGallery[currentIndex].closest(".card-portfolio");
    }

    window.openFulImg = openFulImg;
    window.closeImg = closeImg;
    window.prevImg = prevImg;
    window.nextImg = nextImg;

    
});
