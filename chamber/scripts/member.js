document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("members-container");

    fetch("https://jvrabang.github.io/wdd230/chamber/data/members.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(member => {
                const memberCard = createMemberCard(member);
                membersContainer.appendChild(memberCard);
            });
        })
        .catch(error => {
            console.error("Error fetching members data:", error);
        });

    function createMemberCard(member) {
        const card = document.createElement("div");
        card.classList.add("member-card");

        const image = document.createElement("img");
        image.src = "images/" + member.image;
        image.alt = member.name;
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = member.name;
        card.appendChild(name);

        const address = document.createElement("p");
        address.textContent = "Address: " + member.address;
        card.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = "Phone: " + member.phone;
        card.appendChild(phone);

        const website = document.createElement("p");
        const websiteLink = document.createElement("a");
        websiteLink.href = member.website;
        websiteLink.textContent = "Website";
        website.appendChild(websiteLink);
        card.appendChild(website);

        const membership = document.createElement("p");
        membership.textContent = "Membership Level: " + member.membership_level;
        card.appendChild(membership);

        const otherInfo = document.createElement("p");
        otherInfo.textContent = member.other_information;
        card.appendChild(otherInfo);

        return card;
    }
});
