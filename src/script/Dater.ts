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

export default Dater;

