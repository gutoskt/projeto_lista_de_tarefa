let listaElement = document.querySelector("#app ul"); /* Forma de selecionar uma estrutura html*/
let inputElement = document.querySelector("#app input");
let buttonElment = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefa")) || [];

renderTarefas();

function salvar(){

    localStorage.setItem("@listaTarefa", JSON.stringify(tarefas));
}

function excluirTarefa(posicao){
    
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvar();

}

function renderTarefas(){

    listaElement.innerHTML = "";
    
    tarefas.map((tarefaP) => { /* ele anda pela lista ee usa o nome para conlovar os elementos da lista */
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefaP);
        let linkElement = document.createElement("a");
        let linkText = document.createTextNode("Excluir");

        let posicao = tarefas.indexOf(tarefaP);

        linkElement.setAttribute("href", "#");
        linkElement.appendChild(linkText);
        linkElement.setAttribute("onclick", `excluirTarefa(${posicao})`);
        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listaElement.appendChild(liElement);
      
    });
}


function adcionarTarefa(){

    if(inputElement.value === ''){
        alert("Digite alguma tarefa");
        return false
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvar();
    }
}

buttonElment.onclick = adcionarTarefa