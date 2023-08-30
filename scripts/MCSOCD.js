var members = [
    {
        "Name": "Abuzer Ganjifrockwala",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/abuzer-ganjifrockwala-9b5924226/",
        "Instagram": "https://instagram.com/abuzer_g63?igshid=YmMyMTA2M2Y=/"
    },
    {
        "Name": "Swetanshu Agrawal",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/swetanshu-agrawal/",
        "Instagram": "https://www.instagram.com/swetanshu.a/"
    },
    {
        "Name": "Harshita",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/harshita-kumari-0943b2242/",
        "Instagram": "https://instagram.com/harshita._.kumari?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Maitry Parmar",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/maitry-parmar-8548ab251/",
        "Instagram": "https://instagram.com/maitryparmar_007?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Shaurya Awasthi",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/shaurya-awashti-077034251/",
        "Instagram": "https://instagram.com/shaurya__awasthi192?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Shreya Agrawal",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "linkedin.com/in/shreya-agrawal-69a679243/",
        "Instagram": "https://www.instagram.com/shreyaagrawal04/"
    },
    {
        "Name": "Tamanna Grover",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/tamanna-grover-062b66252/",
        "Instagram": "https://www.instagram.com/tamanna.grover_/"
    },
    {
        "Name": "Vaibhav Raj",
        "Designation": "",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/vaibhavraj-exe/",
        "Instagram": "https://instagram.com/vaibhavraj.exe?igshid=ZDdkNTZiNTM=/"
    }
];

var dynamic = document.querySelector('.MCSOCD_Main');
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