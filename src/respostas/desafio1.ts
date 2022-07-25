// Resposta 1-Alterando os dados
const funcionario = {
    codigo: 14,
    nome: 'Juliana'
};

// Resposta 2-Alterando os dados
const funcionario2: {codigo: number, nome: string} = {
    codigo: 15,
    nome: 'Veronica'
}

// Respostas 3 e 4-Alterando os dados
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 14;
funcionarioObj.nome = 'Juliana';

const funcionarioObj2: Funcionario = {
    codigo: 14,
    nome: 'Juliana'
}