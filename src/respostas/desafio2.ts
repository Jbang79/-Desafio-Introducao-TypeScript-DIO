enum Trabalho {
    Dev,
    Boleira,
    Ator,
    Enfermeira,
    Jogador,
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Juliana',
    idade: 42,
    profissao: Trabalho.Dev
};

let pessoa2: Humano = {
    nome: 'Veronica',
    idade: 35,
    profissao: Trabalho.Boleira
};

let pessoa3: Humano = {
    nome: 'Ryan',
    idade: 18,
    profissao: Trabalho.Ator
};

let pessoa4: Humano = {
    nome: 'Miriam',
    idade: 64,
    profissao: Trabalho.Enfermeira
}

let pessoa5: Humano = {
    nome: 'Junior',
    idade: 15,
    profissao: Trabalho.Jogador
}