const salvararmazenamento = () => {
    //função com local storage para atualizar o armazenamneto local, chamando em outras funções.
}
const cadastrodealuno = () => {
    //henrique aplique sua função aq.
}
const adnota = () =>{
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
const statusdeaprovacao = (nota1bim, nota2bim) => {
    let media = (nota1bim + nota2bim) / 2;
    let status;
    if(media>=6){
        status = "aprovado";
    }
    else if(media>=4){
        status = "recuperação"
    }
    else{
        status = "reprovado"
    }
    //terornar ao objeto. 
    //salvararmazenamento()
}
const calcularobjeto = () => {
    //função para calcular media e transformar todos os item em um objeto só(nomo,ra,email, notas 1bim, 
    //notas 2bim, media e status de aprovado ). salvar armazenamento()
}

const imprimirlistaalunos = () => {
    //função para imprimir aluno, um por vez, salvararmazenamento()
}
const editarnotas = () => {
    //função para editar notas na lista de alunos, coloquem um alert de confimarção antes de alterar as notas
    // salvararmazenamento()
}
const removeraluno = () => {
    //função ligada a um botão para remover um aluno do localstorage.
}
