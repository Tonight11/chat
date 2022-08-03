let autoresize = document.querySelectorAll('[data-autoresize]');

autoresize.forEach(i => {
	let autoresizeH = i.offsetHeight;

	i.addEventListener('input', e => {
		let current = e.target;

		current.style.height = autoresizeH + 'px';
		current.style.height = current.scrollHeight + 'px';
	})
})