//criar pastas
const fs = require('fs');

//com metodo sincrono
fs.mkdirSync('logs');

//com metodo assincrono

fs.mkdir('./log2',(erro)=>{
    if(erro){
        console.log("Erro!!")
    }
})