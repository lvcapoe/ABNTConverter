import Reference from './Reference';
import Dater from './Dater';
class Book extends Reference{ 
	name: string;
	lastName: string;
	title: string;
	subTitle: string;
	edition: string;
	local: string;
	publisher: string;

	getInfo(){
		this.name = (<HTMLInputElement>document.querySelector('#name')).value, 
		this.lastName = (<HTMLInputElement>document.querySelector('#lastName')).value,
		this.title = (<HTMLInputElement>document.querySelector('#title')).value,
		this.subTitle = (<HTMLInputElement>document.querySelector('#subtitle')).value,
		this.edition = (<HTMLInputElement>document.querySelector('#edition')).value,
		this.local = (<HTMLInputElement>document.querySelector('#local')).value,
		this.publisher = (<HTMLInputElement>document.querySelector('#publisher')).value,
		this.accessDate = Dater.FormatDate((<HTMLInputElement>document.querySelector('#access')).value);
	}

	getLink(){
		return this.link = `${this.lastName.toUpperCase()}, ${this.name}. ${this.title}: ${this.subTitle}. ${this.edition}. ${this.local}: ${this.publisher}, ${this.accessDate}.`
	}

	static WriteHTML(){
		return `
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

export default Book;