const salvararmazenamento = () => {
    //função com local storage para atualizar o armazenamneto local, chamando em outras funções.
}
const cadastrodealuno = () => {
    //henrique aplique sua função aq.
}
const cadastronotas1bim = () => {
    //função para receber nota da prova, da prova integrada e da AEP do primeiro bimestre. salvaarmazenamento()
}
const cadastronotas2bim = () => {
    //função para receber nota da prova, da prova integrada e da AEP do segundo bimestre. salvaarmazenamento()
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
