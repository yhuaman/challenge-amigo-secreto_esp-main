
let amigos = [];

function xAgregarAmigo(){

    let nombre = document.getElementById("nomAmigo").value.trim();
    if(nombre === ""){
        alert("El sistema no permite valores nulos, ingrese un nombre valido");
        return;
    }

    amigos.push(nombre);
    document.getElementById("nomAmigo").value = "";
    xMostrarLista();

}

function xMostrarLista(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })

}

function xSortearAmigo(){
    if(amigos.length === 0){
        alert("La lista de amigos se encuenta vacia, Agregar los nombres primero");
        return;
    }

    let xIndiceAleatorio = Math.floor(Math.random() * amigos.length);
    let xAmigoSecreto = amigos[xIndiceAleatorio];
    document.getElementById("resultado").textContent = "El amigo secreto es: " + xAmigoSecreto;
}

