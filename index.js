let menu = document.querySelector('.menu');
let box = document.querySelector('.box');

menu.addEventListener('click', function () {
    box.style.display = 'block';
});

menu.addEventListener('mouseover', function () {
    box.style.display = 'none';
});
