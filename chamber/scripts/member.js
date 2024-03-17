// JavaScript code to fetch and display member information

// Function to fetch member data from JSON
async function fetchMemberData() {
    try {
        const response = await fetch('https://jvrabang.github.io/wdd230/chamber/data/members.json');
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to create member cards
function createMemberCard(member) {
    const card = document.createElement('div');
    card.classList.add('member-card');

    // Construct card content
    const html = `
        <img src="${member.image}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${member.membership}</p>
        <!-- Add more member information here as needed -->
    `;

    card.innerHTML = html;
    return card;
}

// Function to display member cards in grid view
function displayGrid(members) {
    const memberContainer = document.getElementById('memberContainer');
    memberContainer.innerHTML = '';

    members.forEach(member => {
        const card = createMemberCard(member);
        memberContainer.appendChild(card);
    });
}

// Function to display member cards in list view
function displayList(members) {
    const memberContainer = document.getElementById('memberContainer');
    memberContainer.innerHTML = '';

    members.forEach(member => {
        const card = createMemberCard(member);
        card.classList.add('list-view');
        memberContainer.appendChild(card);
    });
}

// Function to initialize the directory page
async function initializeDirectory() {
    const members = await fetchMemberData();
    displayGrid(members); // Default view is grid

    // Event listener for view toggle button
    const toggleButton = document.getElementById('toggle-view-button');
    toggleButton.addEventListener('click', () => {
        const listView = toggleButton.classList.contains('list-view');
        if (listView) {
            displayGrid(members);
            toggleButton.classList.remove('list-view');
            toggleButton.textContent = 'Switch to List View';
        } else {
            displayList(members);
            toggleButton.classList.add('list-view');
            toggleButton.textContent = 'Switch to Grid View';
        }
    });
}

// Initialize directory page
initializeDirectory();
