// Navigation on hover ======>

const hoverNav = document.getElementById('hover_1');
const dropdown_ul = document.querySelector('.dropdown-ul');

dropdown_ul.style.display = 'none';

hoverNav.addEventListener('mouseenter', () => {
    dropdown_ul.style.display = 'block';
    dropdown_ul_2.style.display = 'none';
});

window.addEventListener('click', () => {
    dropdown_ul.style.display = 'none';
});


const hoverNav_2 = document.getElementById('hover_2');
const dropdown_ul_2 = document.querySelector('.dropdown-ul-2');

dropdown_ul_2.style.display = 'none';

hoverNav_2.addEventListener('mouseenter', () => {
    dropdown_ul_2.style.display = 'block';
    dropdown_ul.style.display = 'none';

});

window.addEventListener('click', () => {
    dropdown_ul_2.style.display = 'none';
});

// Navigation on click ======>

const navbar = document.getElementById('navbar');

navbar.addEventListener('click', () => {
    navbar.classList.toggle('active');
})