// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("click", () => {
    label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    nomeInput.addEventListener("blur", () => {
    nomeLabel.classList.remove("required-popup");
    });
}
  
function estilizarInputCorreto(input, helper) {
    nomeHelper.classList.remove("visible");
    nomeInput.classList.remove("error");
    nomeInput.classList.add("correct");
}
  
function estilizarInputIncorreto(input, helper) {
    nomeHelper.classList.add("visible");
    nomeInput.classList.add("error");
    nomeInput.classList.remove("correct");
}

let titulo = document.querySelector("h2")
titulo.style.color= "blue";
titulo.style.fontSize ="2rem"

//Primeira interaçao do usuario"//
// Usuario digitou um nome de usuario não valido//
let nome = document.getElementById("nome")
nome.style.color = "#00240F";

let errorText = document.querySelector(".error-text")
nomeInput.classList.add("error")
errorText.classList.add("visible")

// Segunda interação com usuario//
// usuario digitou um nome de usuario valido//
// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nomeInput");
let nomeLabel = document.querySelector('label[for="nomeLabel"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

// Validar valor do input
nomeInput.addEventListener("change", (e)=> {
  let value = e.target.value

  if(value.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper)
    nomeInputsCorretos.nome = false
  } else 

    // Adicionar estilos dinâmicos se o valor estiver correto
    { estilizarInputCorreto(nomeInput, nomeHelper);
    nomeInputsCorretos.nome = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("emailImput");
let emailLabel = document.querySelector('label[for="emaillabel"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(value.includes("@") && value.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver valor incorreto
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
btnContatoEnviar.addEventListener("click", (e)=>{
    if(inputsCorretos.nome == false ||
      inputsCorretos.email == false ||) {
      e.preventDefault()
      alert('Os campos obrigatorios precisam ser preenchidos corretamente')
    }else{
      alert("formulario enviado com sucesso")
    }
  })