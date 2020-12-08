const slider = document.querySelector('.swider-container');

let mySwiper = new Swiper('.swiper-container', {
 
	slidesPreview: 3,
	spaceBetween: 10,
	pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
  	},
})


let faqOpen = document.querySelectorAll('.faq__open');
for(let i = 0; i < faqOpen.length; i++) {
	faqOpen[i].addEventListener('click', function(e) {
		e.preventDefault();
		console.log(this);
		this.classList.toggle('faq__open--active');
	});
}

// document.addEventListener('keydown', function(e) {
// 	if(e.which === 27) {
// 		let popupActive = document.querySelector('.popup.open');
// 		popupClose(popupActive);
// 	}
// });

// (function () {
// 	if (!Element.prototype.closest) {
// 		Element.prototype.closest = function (css) {
// 			var node = this;
// 			while (node) {
// 				if (node.matches(css)) return node;
// 				else node = node.parentElement;
// 			}
// 			return null;
// 		};
// 	}
// })();

// (function () {
// 	if (!Element.prototype.matches) {
// 		Element.prototype.matches = Element.prototype.matchesSelector ||
// 			Element.prototype.webkitMatchesSelector ||
// 			Element.prototype.mozMatchesSelector ||
// 			Element.prototype.msMatchesSelector;
// 	}
// })();