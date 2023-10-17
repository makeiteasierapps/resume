// animations.js

// Function to animate progress bars in Skills section
export function animateProgressBar(bar, level) {
  bar.animate([
    { width: '0%' },
    { width: `${level}%` }
  ], {
    duration: 2000, // Duration of animation in milliseconds
    fill: 'forwards' // Ensures that the animation's effects persist after it finishes
  });
}

// Function to animate timeline in Experience section
export function animateTimeline(item) {
  item.animate([
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(0)' }
  ], {
    duration: 1000, // Duration of animation in milliseconds
    fill: 'forwards' // Ensures that the animation's effects persist after it finishes
  });
}

// Function to animate elements on scroll
export function animateOnScroll(element, animation) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animation(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(element);
}
