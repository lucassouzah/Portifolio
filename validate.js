const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por Favor, preencha o seu nome");
        return;
    }
    // Verifica se o email esta correto
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se o campo de mensagem foi preenchido
    if (messageTextarea.value ==="") {
        alert("Por favor, escreva uma mensagem");
        return;
    }


    // Se os campos estiverem correntos então enviar formulario
    form.submit();
    alert("Mensagem Enviada com Sucesso")

});

// função para validar o email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.text(email)){
        return true;
    }    

    return false;

}