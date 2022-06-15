const content = document.querySelector('#content');

const WebMatter = {
	GetInfo: function (){
		return {
			name: document.querySelector('#name').value, 
			lastName: document.querySelector('#lastName').value,
			link: document.querySelector('#url').value,
			title: document.querySelector('#title').value,
			site: document.querySelector('#siteName').value,
			year: document.querySelector('#year').value,
			access: document.querySelector('#access').value
		}
	},
	WriteInfo: function (info){
		return( 
			`
					${info.lastName.toUpperCase()}, ${info.name}. ${info.title}. ${info.site}, ${info.year}. Disponível em: &lt;${info.link}&gt;. Acesso em: ${info.access.substring(8,10)}/${info.access.substring(5,7)}/${info.access.substring(0,4)}.
			`
		);
	}
}

document.querySelector('#abnButton').addEventListener('click', ()=>{
	content.innerHTML = WebMatter.WriteInfo(WebMatter.GetInfo());
});
