// Update the Excel File
// Go to the following website -"https://codebeautify.org/excel-to-json"
// Convert Excel to JSON and save it as ALUMNI_DATA.json
// DO NOT CHANGE THIS SCRIPT
// DO NOT CONVERT THE EXCEL TO JSON FROM ANY OTHER WEBSITE

document.addEventListener("DOMContentLoaded", function() {
    fetch('Alumni_Detail/ALUMNI_DATA.json')
        .then(response => response.json())
        .then(data => {
            var dynamic = document.querySelector('.ALUMNI_DETAIL_Main');
            
            // Creating section list
            var sectionList = document.createElement('div');
            sectionList.className = 'button-conatiner';

            for (const section in data) {
                if (data.hasOwnProperty(section)) {
                    var alumni = data[section].slice(1,-1);
                    
                    var sectionLink = document.createElement("a");
                    sectionLink.href = "#" + section.slice(1,-1); 
                    
                    var buttonElement = document.createElement("button");
                    buttonElement.type = "button";
                    buttonElement.className = "btn btn-outline-light buttons";
                    buttonElement.textContent = section.slice(1,-1); 
                    
                    sectionLink.appendChild(buttonElement);
                    sectionList.appendChild(sectionLink);
                }
            }
            dynamic.appendChild(sectionList);
            
            // Loop through each section (e.g., "LEADS", "SAMBED", etc.)
            for (const section in data) {
                if (data.hasOwnProperty(section)) {
                    var alumni = data[section];

                    // Create a section header
                    var sectionHeader = document.createElement('div');
                    sectionHeader.className = 'row mb-5 top-para';
                    sectionHeader.id = section.slice(1,-1);
                    sectionHeader.innerHTML = `
                        <div class="col">
                            <h2>${section.slice(1,-1)}</h2>
                        </div>
                    `;

                    // Create a row container for the alumni
                    var rowContainer = document.createElement('div');
                    rowContainer.className = 'row c-row';

                    // Loop through alumni in the current section
                    for (var i = 0; i < alumni.length; i++) {
                        var alum = alumni[i];
                        var card = document.createElement('div');
                        card.className = 'col-lg-3 col-md-6 pt-1 cds';
                        card.innerHTML =
                            `<div class="card-container manual-flip">
                                <div class="card border-0" >
                                    <div class="front">
                                        <div class="cover"></div>
                                        <div class="user">
                                            <img src="Alumni_Detail/Alumni_Photo/${alum.Name}.jpg" alt="${alum.Name}">
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h3>${alum.Name}</h3>
                                                <p class="profession">${alum.Domain}<br>${alum.Designation}</p>
                                                <p class="about">${alum.About}</p>
                                                <div class="d-flex flex-row justify-content-center">
                                                    ${alum.Facebook!==undefined?
                                                        `<div class="social-links-f text-center">
                                                            <a href="${alum.Facebook}" target="_blank">
                                                                <i class="fab fa-facebook"></i>
                                                            </a>
                                                        </div>` :`<div class="social-links text-center">
                                                            <a>
                                                                <i class="fab fa-facebook"></i>
                                                            </a>
                                                        </div>`
                                                    }
                                                    ${alum.Linkedin!==undefined?
                                                        `<div class="social-links-l text-center">
                                                            <a href="${alum.Linkedin}" target="_blank">
                                                                <i class="fab fa-linkedin"></i>
                                                            </a>
                                                        </div>` :`<div class="social-links text-center">
                                                            <a>
                                                                <i class="fab fa-linkedin"></i>
                                                            </a>
                                                        </div>`
                                                    }
                                                    ${alum.Instagram!==undefined?
                                                        `<div class="social-links-i text-center">
                                                            <a href="${alum.Instagram}" target="_blank">
                                                                <i class="fab fa-instagram"></i>
                                                            </a>
                                                        </div>` :`<div class="social-links text-center">
                                                            <a>
                                                                <i class="fab fa-instagram"></i>
                                                            </a>
                                                        </div>`
                                                    }
                                                </div>
                                            </div>
                                            <div class="footer">
                                                <button class="btn btn-simple" onclick="rotateCard(this)">
                                                    <i class="fa fa-mail-forward"></i> Know More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="content">
                                            <div class="main">
                                                <h3 class="name">${alum.Name}</h3>
                                                <p class="profession">${alum.Domain} - ${alum.Designation}</p>
                                                <p class="text-center">${alum.Description}<br><br>${alum.Profession}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-simple" rel="tooltip" onclick="rotateCard(this)">
                                                <i class="fa fa-reply"></i> Back
                                            </button>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div> `;
                        rowContainer.appendChild(card);
                    }
                    dynamic.appendChild(sectionHeader);
                    dynamic.appendChild(rowContainer);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
});