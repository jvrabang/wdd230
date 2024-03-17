const baseURL = "https://jvrabang.github.io/wdd230/";
const linksURL = "https://jvrabang.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(lessons) {
  const activitiesList = document.querySelector('.card ul');
  activitiesList.innerHTML = ''; // Clear existing list
  
  lessons.forEach(lesson => {
    const listItem = document.createElement('li');
    listItem.textContent = `${lesson.lesson}: `;
    
    lesson.links.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = `${baseURL}${link.url}`;
      linkElement.textContent = link.title;
      
      const separator = document.createTextNode(' | ');
      
      listItem.appendChild(linkElement);
      listItem.appendChild(separator);
    });
    
    // Remove the last separator
    listItem.removeChild(listItem.lastChild);
    
    activitiesList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', getLinks);
