//Just upload the image as (Robocon_Gallery/Robocon_Images_n) in Robocon_Gallery folder
//No need to make any changes here
//If the website doesnt function properly, remove the code below and uncomment the comments
//And then update this file also whenever you upload a photo

var galleryContainer = document.getElementById('Robocon_Gallery');
var ulElement = document.createElement('ul');
ulElement.className = 'gallery';

var folderPath = 'Robocon_Gallery';

function countFiles() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', folderPath, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var fileList = xhr.responseText.split('\n');
            numImages = fileList.length-349

            for (var i = numImages; i > 0; i--) {
                var imagePath = 'Robocon_Gallery/Robocon_Images_'+i+'.jpg';
                var altText = 'Robocon_Image_' + i;
                var liElement = document.createElement('li');
                var imgElement = document.createElement('img');
                imgElement.src = imagePath;
                imgElement.alt = altText;
                liElement.appendChild(imgElement);
                ulElement.appendChild(liElement);
            }
            galleryContainer.appendChild(ulElement);
        }
    };
    xhr.send();
}
countFiles();


// var numImages = 52;
// var galleryContainer = document.getElementById('Robocon_Gallery');
// var ulElement = document.createElement('ul');
// ulElement.className = 'gallery';
// for (var i = 1; i <= numImages; i++) {
//     var imagePath = 'Robocon_Gallery/Robocon_Images_'+i+'.jpg';
//     var altText = 'Image ' + i;
//     var liElement = document.createElement('li');
//     var imgElement = document.createElement('img');
//     imgElement.src = imagePath;
//     imgElement.alt = altText;
//     liElement.appendChild(imgElement);
//     ulElement.appendChild(liElement);
// }
// galleryContainer.appendChild(ulElement);
