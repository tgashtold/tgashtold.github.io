//slider

$('#myCarousel').carousel({
	interval: 6000
});

$('#myCarousel1').carousel({
	interval: false
});

$('#myCarousel2').carousel({
	interval: false
});

$('#myCarousel3').carousel({
	interval: false
});

function normalizeSlideHeights(id) {
	return function() {
		var slider = $(id);
		var items = $('.item', slider);

		items.css('min-height', 0);

		var maxHeight = Math.max.apply(
			null,
			items
				.map(function() {
					return $(this).outerHeight();
				})
				.get()
		);
		
		items.css('min-height', maxHeight + 'px');
	};
}

$(window).on('load resize orientationchange', normalizeSlideHeights('#myCarousel3'));
$(window).on('load resize orientationchange', normalizeSlideHeights('#myCarousel2'));
$(window).on('load resize orientationchange', normalizeSlideHeights('#myCarousel1'));
$(window).on('load resize orientationchange', normalizeSlideHeights('#myCarousel'));

//popover

const popoverContainer = document.getElementsByClassName('popover-container')[0];

popoverContainer.addEventListener('click', (event) => {
	const target = event.target;

	if (target.classList.contains('popover__btn')) {
		target.parentNode.getElementsByClassName('popover__window')[0].classList.toggle('visible');
	}
});

//details

const detailsElementsBox = document.getElementsByClassName('details')[0];

detailsElementsBox.addEventListener('click', (event) => {
	const target = event.target;

	if (target.classList.contains('details__btn')) {
		target.classList.toggle('details_open');
		target.parentNode.parentNode.getElementsByClassName('details__field')[0].classList.toggle('details_visible');
	}

	if (target.classList.contains('details__btn_closed') || target.classList.contains('details__btn_openned')) {
		target.parentNode.classList.toggle('details_open');
		target.parentNode.parentNode.parentNode
			.getElementsByClassName('details__field')[0]
			.classList.toggle('details_visible');
	}
});

//dropdown

const header = document.getElementsByClassName('header')[0];

header.addEventListener('click', (event) => {
	const target = event.target;

	if (target.classList.contains('menu__link')) {
		const dropdownMenu = target.parentNode.getElementsByClassName('menu-dropdown');

		if (dropdownMenu.length > 0) {
			event.preventDefault();
			target.classList.toggle('menu-item_active');
			dropdownMenu[0].classList.toggle('visible');
		}
	}
});
