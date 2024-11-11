const svg = document.querySelector('.stars');
for(let i = 0; i < 100; i++) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", Math.random() * 100 + "%");
  circle.setAttribute("cy", Math.random() * 100 + "%");
  circle.setAttribute("r", Math.random() * 2);
  circle.setAttribute("fill", "white");
  circle.style.opacity = Math.random();
  svg.appendChild(circle);
}
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(1.05)';
      setTimeout(() => {
        card.style.transform = 'translateY(-10px)';
      }, 300);
    });
  });
  
  // Add twinkling animation to stars
  const stars = document.querySelectorAll('circle');
  stars.forEach(star => {
    setInterval(() => {
      star.style.opacity = Math.random();
    }, Math.random() * 3000 + 1000);
  });