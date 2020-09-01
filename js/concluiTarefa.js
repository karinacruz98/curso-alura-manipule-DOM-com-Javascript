
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button'); //Adiciona um estilo
    botaoConclui.innerText = 'Concluir'; //Declara texto que sera exibido no botao

    //Chama metodo listener
    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento)=>{
    const botaoConclui = evento.target; //Encontrando alvo do evento

    const tarefaCompleta = botaoConclui.parentElement; //Pegando o "pai" do elemento = li

    tarefaCompleta.classList.toggle('done'); //executa a classe quando botao eh acionado
}

export default BotaoConclui;