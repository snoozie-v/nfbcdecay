import data from './data.js';

const currentYear = new Date().getFullYear();
console.log(data);

function displayData(showExpired = false, searchQuery = '') {
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = '';

  const now = new Date();

  // Filter books based on expiration toggle and search query
  let filteredBooks = data;
  
  if (!showExpired) {
    // Show only active (non-expired) books
    filteredBooks = data.filter(item => {
      const expireDate = new Date(item.claiming_expire);
      return expireDate > now;
    });
  }

  if (searchQuery.trim() !== '') {
    // Filter by search query (case-insensitive) in either title or author
    filteredBooks = filteredBooks.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const authorMatch = item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase());
      return titleMatch || authorMatch;
    });
  }

  // Display the filtered books
  filteredBooks.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'data-item';
    itemDiv.innerHTML = `
      <h2><a href="https://vechainstats.com/account/${item.contract}">${item.title}</a></h2>
      ${item.author ? `<h4><strong>Author:</strong> ${item.author}</h4>`: ''}
      <ul>
        ${item.creation ? `<li><strong>Creation Date:</strong> ${item.creation}</li>` : ''}
        ${item.tier1_final ? `<li><strong>Tier 1 Final Day:</strong> ${item.tier1_final}</li>` : ''}
        ${item.tier2_start ? `<li><strong>Tier 2 Start Date:</strong> ${item.tier2_start}</li>` : ''}
        ${item.tier2_final ? `<li><strong>Tier 2 Final Day:</strong> ${item.tier2_final}</li>` : ''}
        ${item.tier3_final ? `<li><strong>Tier 3 Final Day:</strong> ${item.tier3_final}</li>` : ''}
        ${item.claiming_expire ? `<li><strong>Claiming Expire:</strong> ${item.claiming_expire}</li>` : ''}
      </ul>
      <h3><a href="https://nfbclub.marketplace.vechain.org/collections/${item.contract}">MaaS Link</h3>
    `;
    dataContainer.appendChild(itemDiv);
  });

  // If no books match the search, display a message
  if (filteredBooks.length === 0) {
    dataContainer.innerHTML = '<p>No matching books found.</p>';
  }
}

// Initial display (only active books)
displayData();

// Toggle for showing expired books
const toggleExpired = document.getElementById('toggle-expired');
let showExpired = false;
toggleExpired.addEventListener('change', () => {
  showExpired = toggleExpired.checked;
  const searchInput = document.getElementById('search-input').value;
  displayData(showExpired, searchInput);
});

// Search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value;
  displayData(showExpired, searchQuery);
});

// Update every 12 hours
setInterval(() => {
  const searchQuery = document.getElementById('search-input').value;
  displayData(showExpired, searchQuery);
}, 43200000);