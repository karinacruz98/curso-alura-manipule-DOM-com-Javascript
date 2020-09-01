import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

    const criarTarefa = (evento) => {
    evento.preventDefault(); //previne comportamento padrao de recarregar a pagina

    const lista = document.querySelector('[data-list]');
    
    const input = document.querySelector('[data-form-input]'); 
    const valor = input.value; //atribui valor do objeto selecionado a uma constante
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task'); //adiciona uma classe
    const conteudo = `<p class = "content">${valor}<\p>` //atribui valor a uma variavel

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui()); //criando botao de conclusao da tarefa
    tarefa.appendChild(BotaoDeleta()); //criando botao de deletar da tarefa
    lista.appendChild(tarefa);

    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]'); //percorrendo o DOM

novaTarefa.addEventListener('click', criarTarefa ); //botao chamando funcao ao escutar comportamento de click