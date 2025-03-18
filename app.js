// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  if (amigos.length >= 10) {
    alert(
      "!!!hooo!!! tienes muchos amigos, pero no puedes agregar más de 10 amigos."
    );
    document.getElementById("amigo").value = "";
    return;
  }
  const nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo === "") {
    alert("Por favor, agrega  nombre de un amigo");
    return;
  }
  amigos.push(nombreAmigo);
  actualizarAmigos();
  document.getElementById("amigo").value = "";
  return true;
}

function actualizarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  if (resultado.innerHTML !== "") {
    alert("Ya se ha sorteado un amigo, por favor, ingresa nuevos amigos");
    return;
  }
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. porfavor ingresa un amigo");
    return;
  }
  const amigoAleatorio = Math.round(Math.random() * (amigos.length - 1));
  const amigoElegido = amigos[amigoAleatorio];

  amigos = [];
  actualizarAmigos();

  resultado.innerHTML = `El amigo sorteado es: ${amigoElegido}`;
}
