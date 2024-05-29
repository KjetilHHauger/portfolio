document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons and the content sections to toggle
    var buttonRight = document.querySelector('.quarter-circle.right');
    var buttonLeft = document.querySelector('.quarter-circle.left');
    var mainProject = document.querySelector('.main-project');
    var mainAbout = document.querySelector('.main-about');
    const cards = document.querySelectorAll('.project-card');

    // Event listener for the right button
    buttonRight.addEventListener('click', function() {
        if (mainProject.style.display === 'flex') {
            mainProject.style.display = 'none';
        } else {
            mainProject.style.display = 'flex'; // Show this section
            mainAbout.style.display = 'none';   // Hide the other section
        }
    });

    // Event listener for the left button
    buttonLeft.addEventListener('click', function() {
        if (mainAbout.style.display === 'flex') {
            mainAbout.style.display = 'none';
        } else {
            mainAbout.style.display = 'flex';   // Show this section
            mainProject.style.display = 'none'; // Hide the other section
        }
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
          // Toggle a class that performs the flip
          card.classList.toggle('is-flipped');
        });
      });
});