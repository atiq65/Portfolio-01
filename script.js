// =================MOBILE MENU TOGGLE SCRIPT================

const hamburgerMenu = document.getElementById('hamburgerMenu')
const navLinks = document.getElementById('navLinks');
const hamburgerIcon = hamburgerMenu.querySelector('i');

// Toggle Menu on mobile visibility and Icon change on click

hamburgerMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active');

    //Switch between bars and cross icon
    if(navLinks.classList.contains('active')){
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    }else{
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});

//Automatically close mobile menu when clicking any navigation
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    });
});