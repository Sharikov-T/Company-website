let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
	menu.classList.add('active');
})

let menuClose = document.querySelector('.menu-close');
let menuCloseLink = document.querySelectorAll('.menu-link');
for (let i = 0; i < menuCloseLink.length; ++i) {
	menuCloseLink[i].addEventListener('click', function name() {
		menu.classList.remove('active');
	})
}
menuClose.addEventListener('click', function name(params) {
	menu.classList.remove('active');
})