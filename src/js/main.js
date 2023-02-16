const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav-mobile');
const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const offerBtn = document.querySelector('.offer');
const contactBtn = document.querySelector('.contactUs');
const transitionEl = document.querySelector('.transition');
const navBars = document.querySelector('.burger-btn__bars');
//BurgerBtn
const handleNav = () => {
	nav.classList.toggle('nav-mobile--active');
};

const burgerColor = () => {
	if (window.scrollY >= 0 && window.scrollY < 300) {
		navBars.classList.remove('burger-black');
	} else if (window.scrollY >= 300 && window.scrollY <= 800) {
		navBars.classList.add('burger-black');
	} else if (window.scrollY >= 800 && window.scrollY <= 970) {
		navBars.classList.remove('burger-black');
	} else {
		navBars.classList.add('burger-black');
	}
};

//PageTransition
window.onload = () => {
	setTimeout(() => {
		transitionEl.classList.remove('is-active');
	}, 300);
};

window.addEventListener('scroll', burgerColor);
navBtn.addEventListener('click', handleNav);
homeBtn.addEventListener('click', handleNav);
aboutBtn.addEventListener('click', handleNav);
offerBtn.addEventListener('click', handleNav);
contactBtn.addEventListener('click', handleNav);
console.log(navBars);
