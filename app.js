let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim()

    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = '';

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Primero agregue al menos un amigo para sortear.');
        return;
    }

    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto sorteado es: <strong>${amigoSeleccionado}</strong>!</li>`;
    amigos.length = 0;
    mostrarListaAmigos();

}
