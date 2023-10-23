new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// 	dynamicBullets: true,
	// }

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	autoHeight: false,
	slidesPerView: 1,
	spaceBetween: 20,
	centeredSlides: true,
	slidesPerColumn: 1,
	// loop: true,
	speed: 800,
	// direction: 'vertical',

	autoplay: {
		delay: 2000,
		desableOnInteraction: false,
	},

	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// }



})