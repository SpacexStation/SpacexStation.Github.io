let currentIframe = null;

document.querySelectorAll('.content-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.dataset.url;
    openIframe(url);
  });
});

document.querySelector('.close-iframe').addEventListener('click', closeIframe);

function openIframe(url) {
  if (currentIframe) {
    closeIframe();
  }
  
  const container = document.querySelector('.iframe-container');
  const content = document.querySelector('.iframe-content');
  
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  
  content.appendChild(iframe);
  container.style.display = 'block';
  currentIframe = iframe;
}

function closeIframe() {
  const container = document.querySelector('.iframe-container');
  const content = document.querySelector('.iframe-content');
  
  if (currentIframe) {
    content.removeChild(currentIframe);
    currentIframe = null;
  }
  
  container.style.display = 'none';
}