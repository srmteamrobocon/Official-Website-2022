//Just upload the image as (Robocon_Gallery/Robocon_Images_n) in Robocon_Gallery folder
//And then update this file by increasing the variable numImages

var numImages = 52;
var galleryContainer = document.getElementById('Robocon_Gallery');
var ulElement = document.createElement('ul');
ulElement.className = 'gallery';
for (var i = numImages; i > 0; i--) {
    var imagePath = 'Robocon_Gallery/Robocon_Images_'+i+'.jpg';
    var altText = 'Image ' + i;
    var liElement = document.createElement('li');
    var imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = altText;
    liElement.appendChild(imgElement);
    ulElement.appendChild(liElement);
}
galleryContainer.appendChild(ulElement);
