'use strict';

// http://127.0.0.1:8000/?watch=s9iqno5_yt31u0m8

document.addEventListener('DOMContentLoaded', function() {
	let image = document.querySelector('img');
	image.onclick = () => clearInterval(interval);

	let images = [
		'1.png',
		'2.png'
	];
	
	let nextImage = getImage(images);
	let interval = setInterval(() => {
		let item = nextImage.next().value;
		image.src = `/public/css/resources/images/${item}`;
	}, 3000);
});

function *getImage(images) {
	let index = 0;
	for (;;) {
		index = (index > images.length - 1) ? 0 : index;

		yield images[index];
		index++;
	}
}