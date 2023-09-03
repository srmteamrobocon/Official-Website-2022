// Just upload the image as (Robocon_Gallery/Robocon_Images_n) in Robocon_Gallery folder
// And then update this file by increasing the variable numImages
// This script will also shuffle the images everytime

var numImages = 52;
var galleryContainer = document.getElementById('Robocon_Gallery');
var ulElement = document.createElement('ul');
ulElement.className = 'gallery';

// Create an array of number of images
var imagePaths = [];
for (var i = numImages; i > 0; i--) {
    imagePaths.push(i);
}

// Shuffle the imagePaths array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(imagePaths);

// Create and append img elements to ulElement
imagePaths.forEach(function (imagePath, index) {
    var liElement = document.createElement('li');
    var imgElement = document.createElement('img');
    imgElement.src = 'Robocon_Gallery/Robocon_Images_' + imagePath  + '.jpg';
    imgElement.alt = 'Image ' + (index + 1);
    liElement.appendChild(imgElement);
    ulElement.appendChild(liElement);
});
galleryContainer.appendChild(ulElement);