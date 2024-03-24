document.addEventListener("DOMContentLoaded", function() {
    const businessList = document.getElementById('business-list');

    // Function to fetch data and display gold and silver members
    const displayGoldAndSilverMembers = (members) => {
        // Filter gold and silver members
        const goldAndSilverMembers = members.filter(member => member.membership_level === "Gold" || member.membership_level === "Silver");

        // Shuffle the gold and silver members array
        shuffleArray(goldAndSilverMembers);

        // Select the first three members
        const randomMembers = goldAndSilverMembers.slice(0, 3);

        // Clear previous content
        businessList.innerHTML = '';

        // Display company names, images, and website links of random gold and silver members
        randomMembers.forEach(member => {
            const companyDiv = document.createElement('div');
            companyDiv.classList.add('company');

            // Display company name
            const companyName = document.createElement('h3');
            companyName.textContent = member.name;
            companyDiv.appendChild(companyName);

            // Display company image
            const companyImage = document.createElement('img');
            companyImage.src = member.image;
            companyImage.alt = member.name;
            companyDiv.appendChild(companyImage);

            // Display website link with "Website: " preceding it
            const companyWebsite = document.createElement('p');
            companyWebsite.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;
            companyDiv.appendChild(companyWebsite);

            // Add a line break
            const lineBreak = document.createElement('br');
            companyDiv.appendChild(lineBreak);

            businessList.appendChild(companyDiv);
        });
    };

    // Shuffle function to randomize array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Fetch data and display gold and silver members
    fetch('https://jvrabang.github.io/wdd230/chamber/data/members.json')
        .then(response => response.json())
        .then(data => {
            displayGoldAndSilverMembers(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});
