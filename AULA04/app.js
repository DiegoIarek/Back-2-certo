//como criar arquivos no nosso projeto
const fs = require("fs");

//criar um arquivo de log sincrono
let log = "mensagem de log\n"

//fs.writeFileSync('./logs.log',log);
fs.writeFileSync('./logs.log', log, { flag: 'a+' });

//criar arquivos de forma assincrona

fs.writeFile("./logs2.log",log, {flag: 'a+'}, (erro) => {
    if (erro) {
        console.log(erro)
    }
})

//para excluir arquios
fs.unlinkSync("./logs2.log")
 console.log('removido arquivo')

fs.unlinkSync('./logs.log')
console.log("Remvido arquivo usando o unlinkSync")


console.log("fim");