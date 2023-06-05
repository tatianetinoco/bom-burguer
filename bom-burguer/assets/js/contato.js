// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
    label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
    });
}
  
function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}
  
function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

let titulo = document.querySelector("h2")
titulo.style.color= "#00240F";
titulo.style.fontSize ="2rem"

//Primeira interaçao do usuario"//
// Usuario digitou um nome de usuario não valido//
let nome = document.getElementById("nome")
nome.style.color = "#00240F";

let errorText = document.querySelector(".error-text")
nome.classList.add("error")
errorText.classList.add("visible")

// Segunda interação com usuario//
// usuario digitou um nome de usuario valido//


// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

// Validar valor do input
nomeInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper)
    inputsCorretos.nome = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nomeInput, nomeHelper);
    inputsCorretos.nome = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})
btnContatoEnviar.addEventListener("click", (e)=>{
    if(inputsCorretos.nome == false ||
      inputsCorretos.email == false ||){
      e.preventDefault()
      alert('Os campos obrigatorios precisam ser preenchidos corretamente')
    }else{
      alert("formulario enviado com sucesso")
    }
  })