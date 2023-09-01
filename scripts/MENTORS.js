// PS - If you are thinking of converting the data to JSON file and reading it here, you can't because
// you cannot "Fetch" locally because of CORS policy. So you have to host JSON file it on a web server.
// Else do this, store members details in different sheets in an excel file and then use the follwoing website-
// https://tableconvert.com/excel-to-json and copy paste the JSON Object in "members"

var members = [
  {
    Name: "Roel Pais",
    Designation: "Ex-Team Lead",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/roel-pais-30b371223/",
    Instagram: "https://www.instagram.com/roel_pais/",
  },
  {
    Name: "Adheesh Mathur",
    Designation: "Ex-SAMBED Lead",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/adheesh-mathur-21b3ab241/",
    Instagram: "https://instagram.com/_adheesh.1210_?igshid=ZDdkNTZiNTM=/",
  },
  {
    Name: "Rehana",
    Designation: "Ex-SIESED Lead",
    Facebook: "",
    Linkedin: "",
    Instagram: "",
  },
  {
    Name: "Pranav Malakar",
    Designation: "Ex-SPACED Lead",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/pranav-malakar-bb6a2b156/",
    Instagram: "",
  },
  {
    Name: "Abishek.V",
    Designation: "",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/abishek-lodha/",
    Instagram: "https://www.instagram.com/abishek_lodha/",
  },
  {
    Name: "Danush Ramakrishnan S",
    Designation: "",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/danush-ramakrishnan-1913a1221/",
    Instagram: "https://www.instagram.com/yumishiina_arts/",
  },
  {
    Name: "HARIKRISHNAN M",
    Designation: "",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/harikrishnan-manoj",
    Instagram: "https://www.instagram.com/_edwin_jarvis/",
  },
  {
    Name: "Subham Pattanayak",
    Designation: "",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/subham-pattanayak-b07b56237/",
    Instagram: "https://instagram.com/_.subham2._?igshid=MTIzZWQxMDU=/",
  },
  {
    Name: "Yakub Mathew",
    Designation: "",
    Facebook: "",
    Linkedin: "https://www.linkedin.com/in/yakub-mathew-7169621b6/",
    Instagram: "https://www.instagram.com/yakub_mahew/",
  },
];
var dynamic = document.querySelector(".MENTORS_Main");
var rowContainer = document.createElement("div");
rowContainer.className = "row c-row";

for (var i = 0; i < members.length; i++) {
  var card = document.createElement("div");
  card.className = "col-lg-3 col-md-6 pt-1 cds";
  card.innerHTML = `<div class="card h-90">
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
