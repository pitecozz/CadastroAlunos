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
const statusdeaprovacao = (media1, media2) => {
    let media = (media1 + media2) / 2;
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
    return status;
    //terornar ao objeto. 
    //salvararmazenamento()
}
const calcularobjeto = () => {
    //função para calcular media e transformar todos os item em um objeto só(nomo,ra,email, notas 1bim, 
    //notas 2bim, media e status de aprovado ). salvar armazenamento()
    let notaProva1 = document.getElementById('input_prova_1').value;
    let notaAep1 = document.getElementById('input_aep_1').value;
    let notaProvaIntegrada1 = document.getElementById('input_prova_integrada_1').value;

    let notaProva2 = document.getElementById('input_prova_2').value;
    let notaAep2 = document.getElementById('input_aep_2').value;
    let notaProvaIntegrada2 = document.getElementById('input_prova_integrada_2').value;

    let media1 = (parseFloat(notaProva1) + parseFloat(notaAep1) + parseFloat(notaProvaIntegrada1)) / 3;
    let media2 = (parseFloat(notaProva2) + parseFloat(notaAep2) + parseFloat(notaProvaIntegrada2)) / 3;

    let status = statusdeaprovacao(media1, media2);

    let aluno = {
        nome: "Nome do Aluno", 
        ra: "RA do Aluno", 
        email: "Email do Aluno", 
        cpf: "CPF do Aluno",
        notas1bim: [notaProva1, notaAep1, notaProvaIntegrada1],
        notas2bim: [notaProva2, notaAep2, notaProvaIntegrada2],
        media1: media1,
        media2: media2,
        status: status
    };

    localStorage.setItem('aluno', JSON.stringify(aluno));
}

const imprimirlistaalunos = (aluno) => {
    //função para imprimir a lista de alunos na tela, chamando a função de carregar alunos.
    //carregarAlunos()
}

const editarnotas = () => {
    //função para editar notas na lista de alunos, coloquem um alert de confimarção antes de alterar as notas
    // salvararmazenamento()
}
const removeraluno = () => {
    //função ligada a um botão para remover um aluno do localstorage.
}
