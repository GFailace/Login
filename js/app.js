/*
* Create a list that holds all of your cards
*/

/**
* @description Projeto Sistema
* @param {string} title - Projeto Sistema
* @param {string} author - Guilherme Failace
*/

$('#login').on('submit', function valida(e){
e.preventDefault();
//Sistema deve consultar na Database o login, por enquanto está somente fazendo validação de campos
if($('#name').val() === '' | $('#psw').val() === ''){
	swal({
		type: 'error',
		title: 'Oops...',
		text: 'Todos os campos devem ser preenchidos!',
		backdrop: `
		rgba(0, 255, 137, 0.45)
center left
no-repeat
`
	})
}
else{
swal({
	allowEscapeKey: false,
	allowOutsideClick: true,
	timer:2000,
	title: 'Okay!',
	text:'Login efetuado com sucesso!',
	type: 'success'
})
}
})