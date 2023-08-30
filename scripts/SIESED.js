// PS - If you are thinking of converting the data to JSON file and reading it here, you can't because
// you cannot "Fetch" locally because of CORS policy. So you have to host JSON file it on a web server.
// Else do this, store members details in different sheets in an excel file and then use the follwoing website- 
// https://tableconvert.com/excel-to-json and copy paste the JSON Object in "members"

var members = [
    {
        "Name": "Deepak Sharda",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/deepak-sharda/",
        "Instagram": "https://instagram.com/deepak_sharda_?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Smeet Bathani",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://in.linkedin.com/in/smeet-bathani-2937b2226/",
        "Instagram": "https://www.instagram.com/_the_smeet_/"
    },
    {
        "Name": "Maheshwar M R",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/m-r-maheshwar-472305221/",
        "Instagram": "https://instagram.com/ateluguboy?igshid=YmMyMTA2M2Y=/"
    },
    {
        "Name": "Divjot Singh Manchanda",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/divjot-singh-manchanda-910643251/",
        "Instagram": "www.instagram.com/djsmanchanda/"
    },
    {
        "Name": "Krrish Verma",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/krrish-verma/",
        "Instagram": "https://instagram.com/krrish_verma__/"
    },
    {
        "Name": "Liya Maria Alex",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/liya-maria-alex-58817a24b/",
        "Instagram": "https://instagram.com/_m.liyx?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Mohammed Sadriwala",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/mohammed-sadriwala-30205b25b/",
        "Instagram": "https://instagram.com/sadriwala_mohammed?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Pracheta Mitra",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/pracheta-mitra-204409251/",
        "Instagram": "https://instagram.com/prach_was_here?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Sanjeevini Mekin",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/sanjeevini-mekin-4403aa250",
        "Instagram": "https://instagram.com/sanjeevini_mekin/"
    },
    {
        "Name": "Tarushi Singh",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/tarushi-singh-1b655725b/",
        "Instagram": "https://instagram.com/httpt33?igshid=ZDdkNTZiNTM=/"
    }
];

var dynamic = document.querySelector('.SIESED_Main');
var rowContainer = document.createElement('div');
rowContainer.className = 'row c-row';

for (var i = 0; i < members.length; i++) {
    var card = document.createElement('div');
    card.className = 'col-lg-3 col-md-6 pt-1 cds'; 
    card.innerHTML =
        `<div class="card h-90">
            <div class="card-body">
                <img class="round" src="Members_Photo/${members[i].Name}.jpg" alt="${members[i].Name}">
                <h3>${members[i].Name}</h3>
                <p>${members[i].Designation}</p>
                <div class="d-flex flex-row justify-content-center" >
                    <div class="social-f">
                        <a href="${members[i].Facebook}" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div class="social-l">
                        <a href="${members[i].Linkedin}" target="_blank">
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