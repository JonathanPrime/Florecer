window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
		document.getElementById('img-logo').src = '../assets/images/svg/logo-black.svg';
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
		document.getElementById('navbar-to').style.backgroundColor = "#FFFF";
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
	autoplay:true,
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
	touchDrag:false,
	mouseDrag:false,
});

popupWhatsApp = () => {

   let btnClosePopup = document.querySelector('.closePopup');
   let btnOpenPopup = document.querySelector('.whatsapp-button');
   let popup = document.querySelector('.popup-whatsapp');
   let sendBtn_1 = document.getElementById('send-btn-1');
   let sendBtn_2 = document.getElementById('send-btn-2');

   btnClosePopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
   })

   btnOpenPopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
      popup.style.animation = "fadeIn .6s 0.0s both";
   })

   sendBtn_1.addEventListener("click", () => {
      let msg = document.getElementById('whats-in').value;
      let relmsg = msg.replace(/ /g, "%20");
      //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
      window.open('https://wa.me/573006815390?text=' + relmsg, '_blank');
   });

   sendBtn_2.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573115685780?text=' + relmsg, '_blank');
 });

   /* Open pop-up in 15 seconds */
   /* setTimeout(() => {
     popup.classList.toggle('is-active-whatsapp-popup');
   }, 8000); */

}

popupWhatsApp();