const content = document.querySelector('#content');

document.querySelector('#abnButton').addEventListener('click', ()=>{
	let info = {
		name: document.querySelector('#name').value, 
		lastName: document.querySelector('#lastName').value,
		link: document.querySelector('#url').value,
		title: document.querySelector('#title').value,
		site: document.querySelector('#siteName').value,
		year: document.querySelector('#year').value,
		access: document.querySelector('#access').value
	};
	content.innerHTML = `
		<p>
			${info.lastName.toUpperCase()}, ${info.name}. ${info.title}. ${info.site}, ${info.year}. Disponível em: &lt;${info.link}&gt;. Acesso em: ${info.access.substring(8,10)}/${info.access.substring(5,7)}/${info.access.substring(0,4)}.
		cess

	`
});
