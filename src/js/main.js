
const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav-mobile');
const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const offerBtn = document.querySelector('.offer');
const contactBtn = document.querySelector('.contactUs');

const handleNav = () => {
	nav.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);
homeBtn.addEventListener('click', handleNav);
aboutBtn.addEventListener('click', handleNav);
offerBtn.addEventListener('click', handleNav);
contactBtn.addEventListener('click', handleNav);