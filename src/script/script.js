const content = document.querySelector('#content');

document.querySelector('#abnButton').addEventListener('click', ()=>{
	let info = {
		nome: document.querySelector('#nome').value, 
		sobrenome: document.querySelector('#sobrenome').value,
		link: document.querySelector('#URL').value,
		titulo: document.querySelector('#titulo').value,
		site: document.querySelector('#nomesite').value,
		ano: document.querySelector('#ano').value,
		acesso: document.querySelector('#acesso').value
	};
	content.innerHTML = `
		<p>
			${info.sobrenome.toUpperCase()}, ${info.nome}. ${info.titulo}. ${info.site}, ${info.ano}. Disponível em: &lt;${info.link}&gt;. Acesso em: ${info.acesso.substring(8,10)}/${info.acesso.substring(5,7)}/${info.acesso.substring(0,4)}.
		</p>

	`
});