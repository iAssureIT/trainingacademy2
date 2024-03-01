export function onlyAlphabets(event){
	if ((event.which >= 65 && event.which <= 90) ||
		(event.which >= 97 && event.which <= 122) ||
		(event.which === 8 || event.which === 9 || event.which === 46 || event.which === 37 || event.which === 39)
	) {
		return true;
	} else {
		event.preventDefault();
	}
};