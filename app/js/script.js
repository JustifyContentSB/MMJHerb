// function showList(){
//     this.parentNode.children[1].classList.toggle("nav__block");
//     this.parentNode.children[0].classList.toggle("nav__title--arrow")
// }



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