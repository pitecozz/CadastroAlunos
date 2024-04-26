function adnota(){
	const prova1 = parseFloat(document.getElementById('input_prova_1').value);
	const integrada1 = parseFloat(document.getElementById('input_prova_integrada_1').value);
	const aep1 = parseFloat(document.getElementById('input_aep_1').value);


	const prova2 = parseFloat(document.getElementById('prova2').value);
	const integrada2 = parseFloat(document.getElementById('integrada2').value);
	const aep2 = parseFloat(document.getElementById('aep2').value);

	const notas = {
		prova1: prova1,
		prova2: prova2,
		integrada1: integrada1,
		integrada2: integrada2,
		aep1: aep1,
		aep2: aep2
	};

	localStorage.setItem('notas do aluno', JSON.stringify(notas));
}