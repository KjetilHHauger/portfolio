document.addEventListener("DOMContentLoaded", function() {
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
            mainProject.style.display = 'flex'; 
            mainAbout.style.display = 'none';   
        }
    });

    // Event listener for the left button
    buttonLeft.addEventListener('click', function() {
        if (mainAbout.style.display === 'flex') {
            mainAbout.style.display = 'none';
        } else {
            mainAbout.style.display = 'flex';   
            mainProject.style.display = 'none'; 
        }
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
          card.classList.toggle('is-flipped');
        });
      });
});