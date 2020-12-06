let popupLinks = document.querySelectorAll('.popup-link');
let body = document.querySelector('body');
let lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

let timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		let popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			let popupName = popupLink.getAttribute('href').replace('#', '');
			let currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

let popupCloseIcon = document.querySelectorAll('.popup-close');
if(popupCloseIcon.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		let el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		let popupActive = document.querySelector('.popup.open');
		if(popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function(e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function bodyLock() {
	let lockPaddingValue = window.innerWidth = document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for(let index = 0; index < lockPadding.length; index++) {
			let el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function() {
		if(lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				let el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

document.addEventListener('keydown', function(e) {
	if(e.which === 27) {
		let popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();