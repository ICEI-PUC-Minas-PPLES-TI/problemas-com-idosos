if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "entrar.html";
}

const emailLogado = JSON.parse(localStorage.getItem("emailLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${emailLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("emailLogado");
  window.location.href = "entrar.html";
}