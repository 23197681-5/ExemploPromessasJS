import {clienteService} from '../service/client-service.js'

( async()=>{

    const pegaUrl = new URL(window.location);
    const id = pegaUrl.searchParams.get("id");
    ''
    const inputNome = document.querySelector('[data-nome]');
    const inputMail = document.querySelector('[data-email]');
    try{
        const dados =  await clienteService.detalhaCliente(id);
        inputNome.value = dados.nome;
        inputMail.value = dados.email;
    }catch(e){
        console.log(e);
        window.location.href = '../telas/erro.html';
    }
    const formulario = document.querySelector('[data-form]');
    formulario.addEventListener('submit', async (evento)=>{
        evento.preventDefault();
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputMail.value);
            window.location.href = '../telas/edicao_concluida.html';
        }catch(e){
            console.log(e);
            window.location.href = '../telas/erro.html';
        }
    })})()