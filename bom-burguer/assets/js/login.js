const emailInput = document.getElementById('email_login');
const emailLabel = document.getElementById('emailLabel');
const emailHelper = document.getElementById('email-helper');

const senhaInput = document.getElementById('senha');
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');


function togglePopup(input, label) {
  input.addEventListener('focus', () => {
    label.classList.add('required-popup');
  })
  
  input.addEventListener('blur', () => {
    label.classList.remove('required-popup');
  })
}

togglePopup(emailInput, emailLabel);
togglePopup(senhaInput, senhaLabel);

// ---------- VALIDAÇÃO EMAIL ---------- //
emailInput.addEventListener('input', (event) => {
  const valueEmail = event.target.value;

  if (valueEmail.includes('@') && valueEmail.includes('.com')){
    emailInput.classList.remove('error');
    emailInput.classList.add('correct');
    emailHelper.classList.remove('visible');
    inputCorretos.emailInput = true;
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText = 'O email precisa incluir um @ e um .com'
    emailHelper.classList.add('visible');
    inputCorretos.emailInput = false;
  }
})

// ---------- VALIDAÇÃO SENHA ---------- //
senhaInput.addEventListener('blur', (event) =>{
  const valueSenha = event.target.value;

  if(valueSenha === ''){
    senhaInput.classList.remove('correct');
    senhaInput.classList.add('error');
    senhaHelper.innerText = 'O campo não pode estar vazio';
    senhaHelper.classList.add('visible');
    inputCorretos.senhaInput = false;
  }else if(valueSenha.length < 4){
      senhaInput.classList.remove('correct');
      senhaInput.classList.add('error');
      senhaHelper.innerText = 'A senha precisa ter mais de 3 caracteres';
      senhaHelper.classList.add('visible');
      inputCorretos.senhaInput = false;
  }else {
    senhaInput.classList.add('correct');
    senhaInput.classList.remove('error');
    senhaHelper.classList.remove('visible');
    inputCorretos.senhaInput = true;
  }
})

// ---------- ENVIAR FORMULÁRIO---------- //
let btnSubmit = document.getElementById('submit_login');
let inputCorretos = {
  emailInput: false,
  senhaInput: false,
}

btnSubmit.addEventListener('click', (e)=> {
  if(inputCorretos.emailInput == false ||
    inputCorretos.senhaInput == false ){
    e.preventDefault()
    alert('Os campos obrigatórios precisam ser preenchidos corretamente')
  }else{
    alert('Logado Com Sucesso')
  }
})

