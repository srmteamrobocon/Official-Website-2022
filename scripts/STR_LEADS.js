document.addEventListener("DOMContentLoaded", function() {
    fetch('/scripts/STR_LEADS_DATA.json')
        .then(response => response.json())
        .then(members => {
            var dynamic = document.querySelector('.STR_LEADS_Main');
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
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
});
