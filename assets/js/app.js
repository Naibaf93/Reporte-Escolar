let array = [7, 4, 2, 9, 6];

function listarNotas() {
    let lista = document.getElementById("listaNotas");

    for(let nota of array){
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}