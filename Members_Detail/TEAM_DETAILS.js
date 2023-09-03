// Update the Excel File in the correct order
// Go to the following site - "https://www.iloveimg.com/resize-image"
// Resize the image in resolution of 200 x 200 with file name as name of the person
// Go to the following website -"https://codebeautify.org/excel-to-json"
// Convert Excel to JSON and save it as TEAM_DATA.json
// DO NOT CHANGE THIS SCRIPT
// DO NOT CONVERT EXCEL TO JSON FROM ANY OTHER WEBSITE

document.addEventListener("DOMContentLoaded", function() {
    fetch('Members_Detail/TEAM_DATA.json')
        .then(response => response.json())
        .then(data => {
            var dynamic = document.querySelector('.TEAM_DETAILS_Main');
            
            // Creating section list
            var sectionList = document.createElement('div');
            sectionList.className = 'button-conatiner';

            for (const section in data) {
                if (data.hasOwnProperty(section)) {
                    var members = data[section];
                    
                    var sectionLink = document.createElement("a");
                    sectionLink.href = "#" + section; 
                    
                    var buttonElement = document.createElement("button");
                    buttonElement.type = "button";
                    buttonElement.className = "btn btn-outline-light buttons";
                    buttonElement.textContent = section; 
                    
                    sectionLink.appendChild(buttonElement);
                    sectionList.appendChild(sectionLink);
                }
            }
            dynamic.appendChild(sectionList);
            
            // Loop through each section (e.g., "LEADS", "SAMBED", etc.)
            for (const section in data) {
                if (data.hasOwnProperty(section)) {
                    var members = data[section];

                    // Create a section header
                    var sectionHeader = document.createElement('div');
                    sectionHeader.className = 'row mb-5 top-para';
                    sectionHeader.id = section;
                    sectionHeader.innerHTML = `
                        <div class="col">
                            <h2>${section}</h2>
                        </div>
                    `;

                    // Create a row container for the members
                    var rowContainer = document.createElement('div');
                    rowContainer.className = 'row c-row';

                    // Loop through members in the current section
                    for (var i = 0; i < members.length; i++) {
                        var member = members[i];
                        var card = document.createElement('div');
                        card.className = 'col-lg-3 col-md-6 pt-1 cds';
                        card.innerHTML =
                            `<div class="card h-90">
                                <div class="card-body">
                                    <img class="round" src="Members_Detail/Members_Photo/${member.Name}.jpg" alt="${member.Name}">
                                    <h3>${member.Name}</h3>
                                    <p>${member.Designation}</p>
                                    <div class="d-flex flex-row justify-content-center" >
                                        ${member.Facebook!==undefined?
                                            `<div class="social-f text-center">
                                                <a href="${member.Facebook}" target="_blank">
                                                    <i class="fab fa-facebook"></i>
                                                </a>
                                            </div>` :`<div class="social text-center">
                                                <a>
                                                    <i class="fab fa-facebook"></i>
                                                </a>
                                            </div>`
                                        }
                                        ${member.Linkedin!==undefined?
                                            `<div class="social-l text-center">
                                                <a href="${member.Linkedin}" target="_blank">
                                                    <i class="fab fa-linkedin"></i>
                                                </a>
                                            </div>` :`<div class="social text-center">
                                                <a>
                                                    <i class="fab fa-linkedin"></i>
                                                </a>
                                            </div>`
                                        }
                                        ${member.Instagram!==undefined?
                                            `<div class="social-i text-center">
                                                <a href="${member.Instagram}" target="_blank">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </div>` :`<div class="social text-center">
                                                <a>
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </div>`
                                        }
                                    </div>
                                </div>
                            </div>`;
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