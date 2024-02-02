const form = document.querySelector("#form");
const nomeInput = document.querySelector("#name");
const emailInput = document. querySelector("#email");
const mensagemTextarea = document.querySelector("#mensagem");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    // Verifica se o nome está preenchido
    if(nomeInput.value === ""){
        alert ("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o email está preenchido e se é valido
    if(emailInput.value ==="" || !emailvalid(emailInput.value)){
        alert("Por favor, preecha o seu email");
        return;
    }


    // verifica e a mensagem está preenchida
    if (mensagemTextarea.value === ""){
        alert("Por favor, escreva uma mensagem");
        return;
    }


    // Se todos os campos estiverem corretamente preenchidos envia o formulario
    form.submit();
});

    //validar email
    function emailvalid(email) {
        //nome123@gmail.com
        const emailReg = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zAZ0-9._-]+\.[a-zA-Z]{2,}$/
        );
        if(emailReg.test(email)){
            
            return true,
            Swal.fire({
                title: "Formulario Enviado!",
                text: "clique para fechar!",
                icon: "success"
              });
    
        }
            return false,
            Swal.fire({
                icon: "Ops..",
                title: "Veja se preencheu os campos corretamente",
                text: "Algo deu errado!",
            });

    }