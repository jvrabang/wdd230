document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.getElementById('grid-button');
    const listButton = document.getElementById('list-button');
    const memberContainer = document.getElementById('memberContainer');

    // Function to fetch and display member data in a grid
    const displayMembersAsGrid = (members) => {
        memberContainer.innerHTML = ''; // Clear previous content

        members.forEach(member => {
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
            image.src = member.image;
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
    };

    // Function to fetch and display member data in a table
    const displayMembersAsTable = (members) => {
        memberContainer.innerHTML = ''; // Clear previous content

        const table = document.createElement('table');
        table.classList.add('member-table');

        // Create table header
        const headerRow = document.createElement('tr');
        const headers = ['Name', 'Address', 'Phone', 'Website', 'Membership Level', 'Other Information'];

        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });

        table.appendChild(headerRow);

        // Populate table with member data
        members.forEach(member => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = member.name;
            row.appendChild(nameCell);

            const addressCell = document.createElement('td');
            addressCell.textContent = member.address;
            row.appendChild(addressCell);

            const phoneCell = document.createElement('td');
            phoneCell.textContent = member.phone;
            row.appendChild(phoneCell);

            const websiteCell = document.createElement('td');
            const websiteLink = document.createElement('a');
            websiteLink.href = member.website;
            websiteLink.textContent = member.website;
            websiteCell.appendChild(websiteLink);
            row.appendChild(websiteCell);

            // const imageCell = document.createElement('td');
            // const image = document.createElement('img');
            // image.src = member.image;
            // image.alt = member.name;
            // imageCell.appendChild(image);
            // row.appendChild(imageCell);

            const membershipLevelCell = document.createElement('td');
            membershipLevelCell.textContent = member.membership_level;
            row.appendChild(membershipLevelCell);

            const otherInformationCell = document.createElement('td');
            otherInformationCell.textContent = member.other_information;
            row.appendChild(otherInformationCell);

            table.appendChild(row);
        });

        memberContainer.appendChild(table);
    };

    // Fetch data and display as grid initially
    fetch('https://jvrabang.github.io/wdd230/chamber/data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembersAsGrid(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    gridButton.addEventListener("click", function() {
        memberContainer.classList.remove('list-view');
        memberContainer.classList.add('grid-view');

        // Fetch data and display as grid
        fetch('https://jvrabang.github.io/wdd230/chamber/data/members.json')
            .then(response => response.json())
            .then(data => {
                displayMembersAsGrid(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    listButton.addEventListener("click", function() {
        memberContainer.classList.remove('grid-view');
        memberContainer.classList.add('list-view');

        // Fetch data and display as table
        fetch('https://jvrabang.github.io/wdd230/chamber/data/members.json')
            .then(response => response.json())
            .then(data => {
                displayMembersAsTable(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
