var members = [
    {
        "Name": "Abhinav Raja Raizada",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/abhinav-raja-raizada-850440217/",
        "Instagram": "https://www.instagram.com/abhinnxvv/"
    },
    {
        "Name": "Diptayan Jash",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/diptayan-jash-63496b214/",
        "Instagram": "https://www.instagram.com/dj_dipt/"
    },
    {
        "Name": "Medhir Aryan",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/medhir-aryan-1b330826b/",
        "Instagram": "https://instagram.com/_.medhir._?igshid=YmMyMTA2M2Y=/"
    },
    {
        "Name": "Siddhima Singh",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://linkedin.com/in/siddhima-singh-b9330226b/",
        "Instagram": "https://instagram.com/siddhu_paji__/"
    }
];

var dynamic = document.querySelector('.SPACED_Main');
var rowContainer = document.createElement('div');
rowContainer.className = 'row c-row';

for (var i = 0; i < members.length; i++) {
    var card = document.createElement('div');
    card.className = 'col-lg-3 col-md-6 pt-1 cds'; 
    card.innerHTML =
        `<div class="card h-90">
            <div class="card-body">
                <img class="round" src="Photos/${members[i].Name}.jpg" alt="${members[i].Name}">
                <h3>${members[i].Name}</h3>
                <p>${members[i].Designation}</p>
                <div class="d-flex flex-row justify-content-center" >
                    <div class="social-f">
                        <a href="${members[i].Facebook}" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div class="social-l">
                        <a href="${members[i].LinkedIn}" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div class="social-i">
                        <a href="${members[i].Instagram}" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    rowContainer.appendChild(card);
}

dynamic.appendChild(rowContainer);