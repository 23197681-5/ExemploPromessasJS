import {clienteService} from '../service/client-service.js'

const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get("id");
''
var inputNome = document.querySelector('[data-nome]');
const inputMail = document.querySelector('[data-email]');
clienteService.detalhaCliente(id).then( dados => {
    inputNome.value = dados.nome;
    inputMail.value = dados.email;
})
const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    clienteService.atualizaCliente(id, inputNome.value, inputMail.value).then(()=>{
        window.location.href = '../telas/edicao_concluida.html';
    })
})