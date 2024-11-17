// Declare a variable to hold the currently open iframe
let currentIframe = null;

// Add an event listener to each content card on the page
document.querySelectorAll('.content-card').forEach(card => {
  card.addEventListener('click', () => {
    // When a card is clicked, retrieve the URL from the data-url attribute
    const url = card.dataset.url;
    // Open the iframe with the given URL
    openIframe(url);
  });
});

// Add an event listener to the close button of the iframe
document.querySelector('.close-iframe').addEventListener('click', closeIframe);

// Function to open an iframe with the provided URL
function openIframe(url) {
  // If an iframe is already open, close it first
  if (currentIframe) {
    closeIframe();
  }

  // Select the container and content areas where the iframe will be added
  const container = document.querySelector('.iframe-container');
  const content = document.querySelector('.iframe-content');
  
  // Create a new iframe element
  const iframe = document.createElement('iframe');
  iframe.src = url; // Set the source URL for the iframe
  iframe.style.width = '100%';  // Make the iframe take up the full width of the container
  iframe.style.height = '100%'; // Make the iframe take up the full height of the container
  iframe.style.border = 'none'; // Remove the iframe border for a cleaner appearance
  
  // Add the iframe to the content area of the container
  content.appendChild(iframe);
  // Make the iframe container visible
  container.style.display = 'block';
  // Set the currently open iframe
  currentIframe = iframe;
}

// Function to close the currently open iframe
function closeIframe() {
  // Select the container and content areas again
  const container = document.querySelector('.iframe-container');
  const content = document.querySelector('.iframe-content');
  
  // If there's an iframe currently open, remove it from the DOM
  if (currentIframe) {
    content.removeChild(currentIframe);
    currentIframe = null;  // Reset the currentIframe variable
  }
  
  // Hide the iframe container
  container.style.display = 'none';
}
