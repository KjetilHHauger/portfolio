document.addEventListener("DOMContentLoaded", function() {
    let buttonRight = document.querySelector('.quarter-circle.right');
    let buttonLeft = document.querySelector('.quarter-circle.left');
    let buttonBottom = document.querySelector('.half-circle');
    let mainProject = document.querySelector('.main-project');
    let mainAbout = document.querySelector('.main-about');
    let mainContact = document.querySelector('.main-contact');
    const cards = document.querySelectorAll('.project-card');

    // Event listener for the right button
    buttonRight.addEventListener('click', function() {
        if (mainProject.style.display === 'flex') {
            mainProject.style.display = 'none';
        } else {
            mainProject.style.display = 'flex'; 
            mainAbout.style.display = 'none';
            mainContact.style.display = 'none';    
        }
    });

    // Event listener for the left button
    buttonLeft.addEventListener('click', function() {
        if (mainAbout.style.display === 'flex') {
            mainAbout.style.display = 'none';
        } else {
            mainAbout.style.display = 'flex';   
            mainProject.style.display = 'none'; 
            mainContact.style.display = 'none';   
        }
    });

    // Event listener for the bottom button
    buttonBottom.addEventListener('click', function() {
        if (mainContact.style.display === 'flex') {
            mainContact.style.display = 'none';
        } else {
            mainContact.style.display = 'flex';   
            mainProject.style.display = 'none';
            mainAbout.style.display = 'none';  
        }
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
          card.classList.toggle('is-flipped');
        });
      });
});