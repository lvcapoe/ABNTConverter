var options = <HTMLSelectElement>document.querySelector('#options');
var content = document.querySelector('#content');
var inputs = document.querySelectorAll('.inputContainer');

type Month = (
	"Janeiro" |
	"Fevereiro" |
	"Março" |
	"Abril" |
	"Maio" |
	"Junho" |
	"Julho" |
	"Agosto" |
	"Setembro" |
	"Outubro" |
	"Novembro" |
	"Dezembro"
);

class Dater {
	static FormatDate(date: string){
		return `${date.substring(8,10)}/${date.substring(5,7)}/${date.substring(0,4)}`;
	}

	static GetDay(date: string){
		return `${date.substring(8,10)}`;
	}

	static GetMonth(date: string){
		return `${date.substring(5,7)}`;
	}

	static GetYear(date: string){
		return `${date.substring(0,4)}`;
	}
}

class Reference {
	static Link: string;
	static AccessDate: string;
}

class Article extends Reference{
	static Name: string;
	static LastName: string;
	static Title: string;
	static Magazine: string;
	static Local: string;
	static CopyVolume: number;
	static CopyNumber: number;
	static Pages: Array<number>;
	static Month: Month;
	static Year: number;
}

class Book extends Reference{ 
	static Name: string;
	static LastName: string;
	static Title: string;
	static SubTitle: string;
	static Edition: string;
	static Local: string;
	static Publisher: string;

	static GetInfo(){
		Book.Name = (<HTMLInputElement>document.querySelector('#name')).value, 
		Book.LastName = (<HTMLInputElement>document.querySelector('#lastName')).value,
		Book.Title = (<HTMLInputElement>document.querySelector('#title')).value,
		Book.SubTitle = (<HTMLInputElement>document.querySelector('#subtitle')).value,
		Book.Edition = (<HTMLInputElement>document.querySelector('#edition')).value,
		Book.Local = (<HTMLInputElement>document.querySelector('#local')).value,
		Book.Publisher = (<HTMLInputElement>document.querySelector('#publisher')).value,
		Book.AccessDate = Dater.FormatDate((<HTMLInputElement>document.querySelector('#access')).value);
	}

	static GetLink(){
		content.innerHTML = `${Book.LastName.toUpperCase()}, ${Book.Name}. ${Book.Title}: ${Book.SubTitle}. ${Book.Edition}. ${Book.Local}: ${Book.Publisher}, ${Book.AccessDate}.`
	}

	static WriteHTML(){
		 inputs[0].innerHTML = `
				<div class="box">
                        <input id="name" type="text" placeholder="Nome">
                    </div>
                    <div class="box">
                        <input id="lastName" type="text" placeholder="Sobrenome">
                    </div>
                    <div class="box">
                        <input id="title" type="text" placeholder="Título do livro">
                    </div>
                    <div class="box">
                        <input id="subtitle" type="text" placeholder="Subtítulo">
                    </div>
                    <div class="box">
                        <input id="edition" type="text" placeholder="Edição">
                    </div>
                    <div class="box">
                        <input id="local" type="text" placeholder="Local de publicação">
                    </div>
                    <div class="box">
                        <input id="publisher" type="text" placeholder="Editora">
                    </div>
                    <div class="box">
                        <input id="access" type="date" placeholder="Data de publicação">
                </div>
			`;
	}
}

class Homepage extends Reference{
	static Name: string;
	static Site: string;
	static Year: string;
	static Resume: string;

	static GetInfo(){
		Homepage.Name = (<HTMLInputElement>document.querySelector('#name')).value,
		Homepage.Site = (<HTMLInputElement>document.querySelector('#siteName')).value,
		Homepage.Year = (<HTMLInputElement>document.querySelector('#year')).value,
		Homepage.Resume = (<HTMLInputElement>document.querySelector('#resume')).value,
		Homepage.Link = (<HTMLInputElement>document.querySelector('#url')).value,
		Homepage.AccessDate = Dater.FormatDate((<HTMLInputElement>document.querySelector('#access')).value)
	}

	static GetLink(){
		content.innerHTML = (
			`
				${Homepage.Name}. ${Homepage.Site}, ${Homepage.Year}. ${Homepage.Resume}. Disponível em: &lt;${Homepage.Link}&gt;. Acesso em: ${Homepage.AccessDate}.
			`
			)
	}

	static WriteHTML(){
		inputs[0].innerHTML = `
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
			`
	}
}

class Matter extends Reference{
	static Name: string;
	static LastName: string;
	static Title: string;
	static Site: string;
	static Year: string;

	static GetInfo(){
		Matter.Name = (<HTMLInputElement>document.querySelector('#name')).value, 
		Matter.LastName = (<HTMLInputElement>document.querySelector('#lastName')).value,
		Matter.Link = (<HTMLInputElement>document.querySelector('#url')).value,
		Matter.Title = (<HTMLInputElement>document.querySelector('#title')).value,
		Matter.Site = (<HTMLInputElement>document.querySelector('#siteName')).value,
		Matter.Year = (<HTMLInputElement>document.querySelector('#year')).value,
		Matter.AccessDate = Dater.FormatDate((<HTMLInputElement>document.querySelector('#access')).value)
	}

	static GetLink(){
		content.innerHTML = (
			`
			${Matter.LastName.toUpperCase()}, ${Matter.Name}. ${Matter.Title}. ${Matter.Site}, ${Matter.Year}. Disponível em: &lt;${Matter.Link}&gt;. Acesso em: ${Matter.AccessDate}.
			`
		)
	}

	static WriteHTML(){
		inputs[0].innerHTML = `
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
		`
	}
}

class YoutubeVideo extends Reference{
	static Name: string;
	static LastName: string;
	static Title: string;
	static Site: string = "Youtube";
	static Date: string;

	static GetInfo(){
		YoutubeVideo.Name = (<HTMLInputElement>document.querySelector('#name')).value, 
		YoutubeVideo.LastName = (<HTMLInputElement>document.querySelector('#lastName')).value, 
		YoutubeVideo.Title = (<HTMLInputElement>document.querySelector('#title')).value, 
		YoutubeVideo.Date = Dater.FormatDate((<HTMLInputElement>document.querySelector('#date')).value), 
		YoutubeVideo.Link = (<HTMLInputElement>document.querySelector('#url')).value, 
		YoutubeVideo.AccessDate = Dater.FormatDate((<HTMLInputElement>document.querySelector('#access')).value)
	}

	static GetLink(){
		content.innerHTML = (
			`
					${YoutubeVideo.LastName.toUpperCase()}, ${YoutubeVideo.Name}. ${YoutubeVideo.Title}. ${YoutubeVideo.Site}, ${YoutubeVideo.Date}. Disponível em: &lt;${YoutubeVideo.Link}&gt;. Acesso em: ${YoutubeVideo.AccessDate}.
			`
			)
	}

	static WriteHTML(){
		inputs[0].innerHTML = `
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
	}
}

options.addEventListener('change',()=>{
	switch(options.value){
		case 'Book':
			Book.WriteHTML();
		break;

		case 'Homepage':
			Homepage.WriteHTML();
		break;

		case 'Matter':
			Matter.WriteHTML();
		break;

		case 'YoutubeVideo':
			YoutubeVideo.WriteHTML();
		break;
	}
});

document.querySelector('#abnButton').addEventListener('click', ()=>{
	switch(options.value){
		case 'Book':
			Book.GetInfo();
			Book.GetLink();
		break;
		case 'Homepage':
			Homepage.GetInfo();
			Homepage.GetLink();
		break;

		case 'YoutubeVideo':
			YoutubeVideo.GetInfo();
			YoutubeVideo.GetLink();
		break;

		case 'Matter':
			Matter.GetInfo();
			Matter.GetLink();
		break;
	}
});
