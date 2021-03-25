import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    try{
        await clienteService.criaCliente(nome, email);
        window.location.href = '../telas/cadastro_concluido.html'
    }catch(e){
        console.log(e);
        window.location.href = '../telas/erro.html';
    }
})