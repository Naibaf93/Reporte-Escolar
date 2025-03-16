let array = [7, 4, 2, 9, 6];

function listarNotas() {
    let lista = document.getElementById("listaNotas");

    for(let nota of array){
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularPromedio(){
    let suma = 0;
    
    for ( i = 0; i < 5; i++) {
        suma += array[i];
    }

    let promedio = (suma / 5);
    document.getElementById("promedio").textContent = promedio;
}