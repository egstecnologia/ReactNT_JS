//setInterval = Esse comando vai ser execultado de tempos e tempos
//O tempo é em milesegundos


// function acao(){
//     document.write("Executando... <br/>")
// }
// setInterval(acao, 1000)

//Usando Função anonima 
// setInterval(() =>{
//     document.write("Executando!!!!! <br/>")
// }, 1000)

//Usando com variavel para poder matar o processo (Abre o console do navegador nesse exemplo e usa
// comando clearInterval(timer) )
// var timer = setInterval(() =>{
//     document.write("Executando!!!!! <br/>")
// }, 1000)

//Ele execulta apenas um vez
setTimeout(() =>{
     document.write("Execultou o TimerOut <br/>")
 }, 3000)