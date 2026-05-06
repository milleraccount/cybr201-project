// TrustSec Lab Image Loader

var LabPhotos = [
    'Nour.jpg', 
    '20251009_CEHC_Labs_OCM_7755.jpg', 
    '20251009_CEHC_Labs_OCM_7815.jpg'
];

function loadLabGallery() {
    var targetDiv = document.querySelector('section');
    if (targetDiv == null) return;

    var galleryContainer = document.createElement('div');
    galleryContainer.id = "lab-gallery-header";
    galleryContainer.style.textAlign = "center";
    galleryContainer.style.marginBottom = "30px";

    // for loop to load everything at once
    for (var i = 0; i < LabPhotos.length; i++) {
        var img = document.createElement('img');
        img.src = LabPhotos[i];
        
        // manual style for border and to make images not load at fullres
        img.style.width = "220px";
        img.style.margin = "10px";
        img.style.border = "4px solid #5d4a66";
        img.style.borderRadius = "8px";
        
        galleryContainer.appendChild(img);
    }

    // puts all the images at the top
    targetDiv.prepend(galleryContainer);
}

// starts when the html page load
window.onload = loadLabGallery;