const burgerButton = document.querySelector('.burger');
const navigationList = document.querySelector('.navigation__list');
burgerButton.addEventListener('click', function () {
	navigationList.classList.toggle('active');
});