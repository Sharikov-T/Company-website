let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.add('active');
})

let menuClose = document.querySelector('.menu-close')
menuClose.addEventListener('click', function name(params) {
	menu.classList.remove('active');
})