const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters  = document.querySelectorAll('.useTo__scaleSkills_percent'),
       lines = document.querySelectorAll('.useTo__scaleSkills_item-scaleEmpty span')     
 
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});