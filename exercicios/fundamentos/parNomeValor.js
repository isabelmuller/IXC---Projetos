const saudacao = 'oi'

function exec() {
    const saudacao = 'oii'
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Isabel',
    idade: '20',
    peso:'66',
    endereco: {
        logradouro: 'Rua Florianópolis - D, Bairro Centro',
        numero: '380'
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)