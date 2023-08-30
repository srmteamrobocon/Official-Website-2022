var members = [
    {
        Name:"Nikit Mathur",
        Designation:"Team Lead",
        Facebook:"https://www.facebook.com/people/Nikit-Mathur/100082899335488/",
        LinkedIn:"https://www.linkedin.com/in/nikit-mathur-270033231/",
        Instagram:"https://www.instagram.com/_nikitmathur_/",
    },
    {
        Name:"Aarush Bhandari ",
        Designation:"SAMBED Lead",
        Facebook:"",
        LinkedIn:"https://www.linkedin.com/in/aarush-bhandari-33846326a/",
        Instagram:"https://instagram.com/aarushbhandari4?igshid=ZDdkNTZiNTM=/",
    },
    {
        Name:"Gokul Karthik Sai Vamshi",
        Designation:"SIESED Lead",
        Facebook:"",
        LinkedIn:"https://www.linkedin.com/in/gokul-karthik-492ab9252/",
        Instagram:"https://instagram.com/__karthik__sai__?igshid=YmMyMTA2M2Y=/",
    },
    {
        Name:"Divya Sai Aamuktha Pelluri",
        Designation:"SPACED Lead",
        Facebook:"",
        LinkedIn:"https://www.linkedin.com/in/divya-pelluri-1b8a1926b/",
        Instagram:"https://www.instagram.com/ap29122003/",
    },
    {
        Name:"Aryan Bali",
        Designation:"MCSOCD Lead",
        Facebook:"",
        LinkedIn:"https://www.linkedin.com/in/aryan-bali-a55615270/",
        Instagram:"https://www.instagram.com/aryan12889/",
    }
    
];

var dynamic = document.querySelector('.STR_LEADS_Main');
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