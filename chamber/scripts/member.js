document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jvrabang.github.io/wdd230/chamber/data/members.json')
    .then(response => response.json())
    .then(data => {
        const memberContainer = document.getElementById('memberContainer');
        data.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            const name = document.createElement('h2');
            name.textContent = member.name;
            memberDiv.appendChild(name);

            const address = document.createElement('p');
            address.textContent = "Address: " + member.address;
            memberDiv.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = "Phone: " + member.phone;
            memberDiv.appendChild(phone);

            const website = document.createElement('p');
            website.innerHTML = "Website: <a href='" + member.website + "'>" + member.website + "</a>";
            memberDiv.appendChild(website);

            const image = document.createElement('img');
            image.src = "images/" + member.image;
            image.alt = member.name;
            memberDiv.appendChild(image);

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = "Membership Level: " + member.membership_level;
            memberDiv.appendChild(membershipLevel);

            const otherInformation = document.createElement('p');
            otherInformation.textContent = "Other Information: " + member.other_information;
            memberDiv.appendChild(otherInformation);

            memberContainer.appendChild(memberDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
