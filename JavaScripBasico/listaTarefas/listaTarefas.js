
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function adicionarTarefas(){
    if(inputElement.value ===''){
        alert("Digite uma informação");
        return false;
    } else {
        let novaTarefa = inputElement;
        tarefas.push(novaTare);
        inputElement.value = '';
    }
}

buttonElement.onclick = adicionarTarefas;