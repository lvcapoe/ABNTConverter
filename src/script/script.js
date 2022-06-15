
function FormatDate(date){
	return `${date.substring(8,10)}/${date.substring(5,7)}/${date.substring(0,4)}`;
}

const options = document.querySelector('#options');
const content = document.querySelector('#content');
const inputs = document.querySelectorAll('.inputContainer')[0];

options.addEventListener('change', ()=>{
	let option = options.value;
	switch(option){
		case 'Materia':
			inputs.innerHTML = `
				<div class="box">
                        <input id="url" type="text" placeholder="Link URL">
                    </div>    
                    <div class="box">
                        <input id="name" type="text" placeholder="Nome">
                    </div>
                    <div class="box">
                        <input id="lastName" type="text" placeholder="Sobrenome">
                    </div>
                    <div class="box">
                        <input id="title" type="text" placeholder="Título da Matéria">
                    </div>
                    <div class="box">
                        <input id="siteName" type="text" placeholder="Nome do site">
                    </div>
                    <div class="box">
                        <input id="year" type="number" placeholder="Ano">
                    </div>
                    <div class="box">
                        <input id="access" type="date" placeholder="Data de acesso">
                    </div>

			`;
		break;

		case 'Youtube':
			inputs.innerHTML = `
				<div class="box">
                        <input id="url" type="text" placeholder="Link URL">
                    </div>    
                    <div class="box">
                        <input id="name" type="text" placeholder="Nome do autor">
                    </div>
                    <div class="box">
                        <input id="lastName" type="text" placeholder="Sobrenome do autor">
                    </div>
                    <div class="box">
                        <input id="title" type="text" placeholder="Título do vídeo">
                    </div>
                    <div class="box">
                        <input id="siteName" type="text" placeholder="Nome do site" readonly value="Youtube">
                    </div>
                    <div class="box">
                        <label>Data do vídeo:</label>
                        <input id="date" type="date" placeholder="Ano">
                    </div>
                    <div class="box">
                        <label>Data de acesso:</label>
                        <input id="access" type="date" placeholder="Data de acesso">
                    </div>

			`;
		break;

		case 'Homepage':
			inputs.innerHTML = `
				<div class="box">
                        <input id="url" type="text" placeholder="Link URL">
                    </div>    
                    <div class="box">
                        <input id="name" type="text" placeholder="Autor ou Organização">
                    </div>
                    <div class="box">
                        <input id="resume" type="text" placeholder="Emenda">
                    </div>
                    <div class="box">
                        <input id="siteName" type="text" placeholder="Nome do site">
                    </div>
                    <div class="box">
                        <input id="year" type="number" placeholder="Ano">
                    </div>
                    <div class="box">
                        <input id="access" type="date" placeholder="Data de acesso">
                </div>
			`;
		break;
	}
});

const WebMatter = {
	GetInfo: function (){
		return {
			name: document.querySelector('#name').value, 
			lastName: document.querySelector('#lastName').value,
			link: document.querySelector('#url').value,
			title: document.querySelector('#title').value,
			site: document.querySelector('#siteName').value,
			year: document.querySelector('#year').value,
			access: FormatDate(document.querySelector('#access').value)
		}
	},
	WriteInfo: function (info){
		return( 
			`
					${info.lastName.toUpperCase()}, ${info.name}. ${info.title}. ${info.site}, ${info.year}. Disponível em: &lt;${info.link}&gt;. Acesso em: ${info.access}.
			`
		);
	}
}

const HomePage = {
	GetInfo: function (){
		return {
			name: document.querySelector('#name').value,
			site: document.querySelector('#siteName').value,
			year: document.querySelector('#year').value,
			resume: document.querySelector('#resume').value,
			link: document.querySelector('#url').value,
			access: document.querySelector('#access').value
		}
	},
	WriteInfo: function (info){
		return( 
			`
				${info.name}. ${info.site}, ${info.year}. ${info.resume}. Disponível em: &lt;${info.link}&gt;. Acesso em: ${info.access.substring(8,10)}/${info.access.substring(5,7)}/${info.access.substring(0,4)}.
			`
		);
	}
}

const YoutubeVideo = {
	GetInfo: function (){
		return {
			name: document.querySelector('#name').value, 
			lastName: document.querySelector('#lastName').value, 
			title: document.querySelector('#title').value, 
			site: "Youtube", 
			date: FormatDate(document.querySelector('#date').value), 
			link: document.querySelector('#url').value, 
			access: FormatDate(document.querySelector('#access').value) 
		}
	},
	WriteInfo: function (info){
		return( 
			`
					${info.lastName.toUpperCase()}, ${info.name}. ${info.title}. ${info.site}, ${info.date}. Disponível em: &lt;${info.link}&gt;. Acesso em: ${info.access}.
			`
		);
	}
}

document.querySelector('#abnButton').addEventListener('click', ()=>{
	if(options.value=='Homepage'){
		content.innerHTML = HomePage.WriteInfo(HomePage.GetInfo());
	}else if(options.value=='Youtube'){
		content.innerHTML = YoutubeVideo.WriteInfo(YoutubeVideo.GetInfo());
	}else{
		content.innerHTML = WebMatter.WriteInfo(WebMatter.GetInfo());	
	}
});
