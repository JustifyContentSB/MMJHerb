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

});

