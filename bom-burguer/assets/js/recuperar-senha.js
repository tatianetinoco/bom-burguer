const emailInput = document.getElementById('email_recuperar_login_');
const emailHelper = document.getElementById('email-helper');



// ---------- TOGGLE---------- //

function togglePopup(input, label) {
  input.addEventListener('focus', () => {
    label.classList.add('required-popup');
  })
  
  input.addEventListener('onchange', () => {
    label.classList.remove('required-popup');
  })
}

togglePopup(emailInput);


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


// ---------- ENVIAR FORMULÁRIO---------- //
let btnSubmit = document.getElementById('enviar');
let inputCorretos = {
  emailInput: false,
}

btnSubmit.addEventListener('click', (e)=> {
  if(inputCorretos.emailInput == false){
    e.preventDefault()
    alert('Os campos obrigatórios precisam ser preenchidos corretamente')
  }else{
    alert('Em alguns instantes você receberá em seu e-mail uma mensagem com as instruções de como recuperar sua senha')
  }
})