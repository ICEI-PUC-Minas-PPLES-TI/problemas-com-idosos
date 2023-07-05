function voltar() {
  window.location.href = "../Idosos/inter.html";
}

function salvarNome() {
  var nomeInput = document.getElementById("name");
  var nome = nomeInput.value;
  localStorage.setItem("nomeUsuario", nome);
}

document.addEventListener('DOMContentLoaded', function() {
  var nomeInput = document.getElementById("name");
  var nomeUsuario = localStorage.getItem("nomeUsuario");

  if (nomeUsuario) {
    nomeInput.value = nomeUsuario;
  }
});

function salvarBiografia() {
  var biografia = document.getElementById("w3review").value;
  var dados = { biografia: biografia };
  var dadosJson = JSON.stringify(dados);
  localStorage.setItem("biografiaUsuario", dadosJson);
  alert("Alterações salvas com sucesso!");
}

function recuperarBiografia() {
  var dadosJson = localStorage.getItem("biografiaUsuario");
  if (dadosJson) {
    var dados = JSON.parse(dadosJson);
    document.getElementById("w3review").value = dados.biografia;
  }
}

window.addEventListener('DOMContentLoaded', recuperarBiografia);
