// PS - If you are thinking of converting the data to JSON file and reading it here, you can't because
// you cannot "Fetch" locally because of CORS policy. So you have to host JSON file it on a web server.
// Else do this, store members details in different sheets in an excel file and then use the follwoing website- 
// https://tableconvert.com/excel-to-json and copy paste the JSON Object in "members"

var members = [
    {
        "Name": "Ayush Goyal",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/ayush-goyal-4735a8230/",
        "Instagram": "https://instagram.com/ayush_goyal05?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Gautam. M",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/gautam-m-770662259/",
        "Instagram": "https://instagram.com/m_gautam_14?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Vijay Srikrishnan",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/vijay-srikrishnan-185323252/",
        "Instagram": "https://www.instagram.com/vijaysrikrishnan/"
    },
    {
        "Name": "Akhil Anil",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/akhil-anil-71ba81251/",
        "Instagram": "https://instagram.com/i_am_s_p_o_o_n?igshid=YmMyMTA2M2Y=/"
    },
    {
        "Name": "Amshu Kiran Belbase",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/amshu-belbase-727261245/",
        "Instagram": "https://www.instagram.com/amshubelbase08/"
    },
    {
        "Name": "Aniruddh Mathur",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/aniruddh-mathur-b1471b250/",
        "Instagram": "https://instagram.com/aniruddh.30?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Sakshi K",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "",
        "Instagram": ""
    },
    {
        "Name": "Shohon Saha",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "",
        "Instagram": "https://instagram.com/earths_moon_?igshid=ZDdkNTZiNTM=/"
    },
    {
        "Name": "Siddhartha Sawant",
        "Designation": "Member",
        "Facebook": "",
        "Linkedin": "https://www.linkedin.com/in/siddhartha-sawant-185a55264/",
        "Instagram": "https://instagram.com/sidd.sawant_?igshid=ZDdkNTZiNTM=/"
    }
];

var dynamic = document.querySelector('.SAMBED_Main');
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