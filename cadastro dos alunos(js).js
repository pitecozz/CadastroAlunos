function carregarAlunos() {
    var alunosCadastrados = JSON.parse(localStorage.getItem('alunos')) || [];

    var tabela = document.getElementById('tabelaAlunos');
    var tbody = tabela.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    alunosCadastrados.forEach(function(aluno) {
        var newRow = tbody.insertRow();
        newRow.innerHTML = '<td>' + aluno.nome + '</td>' +
                           '<td>' + aluno.email + '</td>' +
                           '<td>' + aluno.ra + '</td>' +
                           '<td>' + aluno.cpf + '</td>';
    });
}

carregarAlunos();

document.getElementById('btnMostrarAlunos').addEventListener('click', function() {
    var tabelaAlunos = document.getElementById('tabelaAlunos');
    tabelaAlunos.classList.toggle('hidden');
});

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var ra = document.getElementById('ra').value;
    var cpf = document.getElementById('cpf').value;

    if (nome && email && ra && cpf) {
        var aluno = {
            nome: nome,
            email: email,
            ra: ra,
            cpf: cpf
        };

        adicionarAluno(aluno);

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('ra').value = '';
        document.getElementById('cpf').value = '';

        document.getElementById('mensagem').innerText = 'Aluno cadastrado com sucesso!';
    } else {
        document.getElementById('mensagem').innerText = 'Por favor, preencha todos os campos.';
    }
});

function adicionarAluno(aluno) {
    var alunosCadastrados = JSON.parse(localStorage.getItem('alunos')) || [];

    alunosCadastrados.push(aluno);

    localStorage.setItem('alunos', JSON.stringify(alunosCadastrados));
}