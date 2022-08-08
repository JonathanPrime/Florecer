window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
		document.getElementById('img-logo').src = '../assets/images/svg/logo-black.svg';
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
		document.getElementById('img-logo').src = '../assets/images/svg/logo-white.svg';
    }
}

// AOS
AOS.init({
    duration: 800,
});

/*---------------------------------
[Master Javascript]

Project: Music

-------------------------------------------------------------------*/

/* let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
    document.getElementById('img-logo').src = '../images/svg/logo-dark.svg';
  } else {
    document.querySelector('.header').classList.remove('active');
    document.getElementById('img-logo').src = '../images/svg/logo-white.svg';
  }
} */

$('.home_slider').owlCarousel({
	loop:true,
	margin:0,
	items:1,
	singleItem:true,
	autoplay:false,
	autoplayTimeout:6000,
	autoplaySpeed:1000,
	smartSpeed:1500,
	dots:false,
	nav:false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1        
		},
		600:{
			items:1
		},
		768:{
			items:1
		},
		1000:{
			items:1
		}
	},
	animateIn:'slideup',
	animateOut:'slidedown',
	touchDrag:true,
	mouseDrag:true,
})