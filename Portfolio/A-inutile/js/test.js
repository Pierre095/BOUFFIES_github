const listItem = document.querySelectorAll('.list');

function activateLink() {
	listItem.forEach( item => {
		item.classList.remove('active');
	});
	this.classList.add('active');
}

listItem.forEach( item => {
	item.addEventListener('click', activateLink);
});
