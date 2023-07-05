
let btnRedefinirSenha = document.querySelector('#recuperarSenha');
let primeiraContainer = document.querySelector('.container:nth-of-type(1)');
let segundaContainer = document.querySelector('#containerRedefinirSenha');
let btnSalvarSenha = document.querySelector('#redefinirSenha');
let senhaInput = document.querySelector('#senha');

btnRedefinirSenha.addEventListener('click', () => {
  let email = document.querySelector('#email').value;

  let usersData = localStorage.getItem('users');
  let users = JSON.parse(usersData);

  if (users && users.length > 0) {
    let user = users.find(user => user.emailCad === email);

    if (user) {
      primeiraContainer.style.display = 'none';
      segundaContainer.style.display = 'block';
    } else {
      console.log('Email não encontrado.');
    }
  } else {
    console.log('Nenhum usuário cadastrado.');
  }
});

btnSalvarSenha.addEventListener('click', () => {
  let email = document.querySelector('#email').value;
  let newPassword = senhaInput.value;

  let usersData = localStorage.getItem('users');
  let users = JSON.parse(usersData);

  let user = users.find(user => user.emailCad === email);

  if (user) {
    user.senhaCad = newPassword;

    localStorage.setItem('users', JSON.stringify(users));

    console.log('Senha alterada com sucesso!');
    window.location.href = 'login.html';
  }
});













