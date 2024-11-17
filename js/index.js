// Create random stars in SVG
const svg = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", Math.random() * 100 + "%");
  circle.setAttribute("cy", Math.random() * 100 + "%");
  circle.setAttribute("r", Math.random() * 2); // Random radius for stars
  circle.setAttribute("fill", "white");
  circle.style.opacity = Math.random(); // Random opacity for twinkling effect
  svg.appendChild(circle);
}

// Add click animation for topic cards
document.querySelectorAll('.topic-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(1.05)'; // Slight scale effect on click
    setTimeout(() => {
      card.style.transform = 'translateY(-10px)'; // Translate after scale
    }, 300); // Delay to create smooth effect
  });
});

// Add twinkling effect to stars using setInterval
const stars = document.querySelectorAll('.stars circle');
function twinkleStars() {
  stars.forEach(star => {
    setTimeout(() => {
      star.style.opacity = Math.random(); // Change opacity for twinkle effect
    }, Math.random() * 3000 + 1000); // Randomize the delay for each star
  });
}
// Call the twinkle function periodically
setInterval(twinkleStars, 3000); // Adjust interval time to control frequency

// Optionally, add CSS transitions for smoother animations on the cards
const topicCards = document.querySelectorAll('.topic-card');
topicCards.forEach(card => {
  card.style.transition = "transform 0.3s ease-in-out"; // Smooth transition for transform property
});
