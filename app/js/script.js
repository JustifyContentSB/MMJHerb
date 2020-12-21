$(function() {

	// FAQ OPEN
	let faqOpen = document.querySelectorAll('.faq__open');
	for(let i = 0; i < faqOpen.length; i++) {
		faqOpen[i].addEventListener('click', function(e) {
			e.preventDefault();
			console.log(this);
			this.classList.toggle('faq__open--active');
		});
	}

	//MODAL
	let modalCall = $('[data-modal]');
	modalCall.on('click', function(event) {
		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).toggleClass('modal-show');
		$('body').toggleClass('no-scroll');

	});

	$('.modal').on('click', function(event) {
		let $this = $(this);
		$(this).removeClass('modal-show');
		$('body').removeClass('no-scroll');
	});

	$('.modal__content').on('click', function(event) {
		event.stopPropagation();
	});

	$(document).on('keydown', function(event) {
		if(event.which === 27) {
			$('.modal').removeClass('modal-show');
			$('body').removeClass('no-scroll');
		}
	});

	//TOGGLE HEADER
	$('.header__toggle-one').on('click', function(event) {
		event.preventDefault();

		$('.header__menu').addClass('header__show');
		$('.header__menu-bottom').addClass('header__show');
		$('body').addClass('no-scroll');
		$('.header__menu-toggle').toggleClass('header__menu-toggle--active');
	});

	$('.header__menu-toggle').on('click', function(event) {
		event.preventDefault();

		$('.header__menu-bottom').toggleClass('header__show');
		$(this).toggleClass('header__menu-toggle--active');
		$('body').toggleClass('no-scroll');
	});

	$(window).scroll(function() {
		let header = $(".header__menu");
		if(pageYOffset > 100) {
			header.addClass('header__show');
		} else  {
			header.removeClass('header__show');
		}
	});

	$(window).scroll(function() {
		let headerDekstop = $(".header__top-wrapper");
		let headerInner = $('.header__inner');
		if(pageYOffset > 200) {
			headerDekstop.addClass('header__top-fixed');
			headerInner.addClass('header__inner-top');
		} else  {
			headerDekstop.removeClass('header__top-fixed');
			headerInner.removeClass('header__inner-top');
		}
	});

	//SLICK
	$('.reviews__list').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  infinite: false,
	  responsive: [
	  	{
	  		breakpoint: 1200,
	  		settings: {
	  			arrows: false
	  		}
	  	}
	  ]
	});

	$('.videos__list').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  infinite: false,
	  responsive: [
	  	{
	  		breakpoint: 1200,
	  		settings: {
	  			arrows: false
	  		}
	  	}
	  ]
	});

	//ORDER
	let inpBriefing = document.querySelector('.order__input-briefing');
	let inpCard = document.querySelector('.order__input-card');
	let inpPot = document.querySelector('.order__input-pot');
	let svgBriefing = document.querySelector('.total__list-briefing svg');
	let svgCard = document.querySelector('.total__list-card svg');
	let svgPot = document.querySelector('.total__list-pot svg');
	let price = document.querySelector('.order__form-pay');
	let orderImg = document.querySelector('.order__form-img');

	let orderInputs = document.querySelectorAll('.order__input');
	for(let i = 0; i < orderInputs.length; i++) {
		orderInputs[i].addEventListener('change', function(e) {
			if((inpBriefing.checked == true) && (inpCard.checked == false) && (inpPot.checked == false)) {
			price.innerHTML = Number(18);
			svgBriefing.classList.add('svg-checked');
			svgPot.classList.remove('svg-checked');
			svgCard.classList.remove('svg-checked');
			orderImg.classList.remove('order__form-img-card');
			orderImg.classList.remove('order__form-img-pot');
			orderImg.classList.add('order__form-img-briefing');
			} else if((inpBriefing.checked == true) && (inpCard.checked == true) && (inpPot.checked == false)) {
				price.innerHTML = Number(27);
				svgBriefing.classList.add('svg-checked');
				svgPot.classList.remove('svg-checked');
				svgCard.classList.add('svg-checked');
				orderImg.classList.remove('order__form-img-briefing');
				orderImg.classList.remove('order__form-img-pot');
				orderImg.classList.add('order__form-img-card');
				
			} else if((inpBriefing.checked == true) && (inpCard.checked == true) && (inpPot.checked == true)) {
				price.innerHTML = Number(36);
				svgBriefing.classList.add('svg-checked');
				svgPot.classList.add('svg-checked');
				svgCard.classList.add('svg-checked');
				orderImg.classList.remove('order__form-img-briefing');
				orderImg.classList.remove('order__form-img-card');
				orderImg.classList.add('order__form-img-pot');
			} else if((inpBriefing.checked == false) && (inpCard.checked == true) && (inpPot.checked == true)) {
				price.innerHTML = Number(36);
				inpBriefing.checked = true;
				svgBriefing.classList.add('svg-checked');
				svgPot.classList.add('svg-checked');
				svgCard.classList.add('svg-checked');
				orderImg.classList.remove('order__form-img-briefing');
				orderImg.classList.remove('order__form-img-card');
				orderImg.classList.add('order__form-img-pot');
			} else if((inpBriefing.checked == false) && (inpCard.checked == false) && (inpPot.checked == true)) {
				price.innerHTML = Number(36);
				inpBriefing.checked = true;
				inpCard.checked = true;
				svgBriefing.classList.add('svg-checked');
				svgPot.classList.add('svg-checked');
				svgCard.classList.add('svg-checked');
				orderImg.classList.remove('order__form-img-briefing');
				orderImg.classList.remove('order__form-img-card');
				orderImg.classList.add('order__form-img-pot');
			} else if((inpBriefing.checked == false) && (inpCard.checked == true) && (inpPot.checked == false)) {
				price.innerHTML = Number(27);
				inpBriefing.checked = true;
				svgBriefing.classList.add('svg-checked');
				svgPot.classList.remove('svg-checked');
				svgCard.classList.add('svg-checked');
				orderImg.classList.remove('order__form-img-briefing');
				orderImg.classList.remove('order__form-img-pot');
				orderImg.classList.add('order__form-img-card');
			} else {
				price.innerHTML = Number(9);
				inpBriefing.checked = false;
				inpCard.checked = false;
				svgBriefing.classList.remove('svg-checked');
				svgPot.classList.remove('svg-checked');
				svgCard.classList.remove('svg-checked');
				orderImg.classList.remove('order__form-img-briefing');
				orderImg.classList.remove('order__form-img-pot');
				orderImg.classList.remove('order__form-img-card');
			}
		});
	}

});

