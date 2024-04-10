const botao = document.getElementById("botao")
        botao.addEventListener("click", validaSenha)
        function validaSenha(){
        const senha = document.getElementById("senha").value
        const confirmacao = document.getElementById("confirmacao").value
        if(senha != confirmacao)
        alert("As duas senhas precisam ser iguais")
        }