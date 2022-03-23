const criarTarefa = document.getElementById('criar-tarefa'); // botão
const clear = document.getElementById('apaga-tudo'); // botão
const remove = document.getElementById('remover-finalizados'); // botão
// const createTask = document.getElementById('texto-tarefa'); // input
// const listTask = document.getElementById('lista-tarefas'); // lista

const criarOneTarefa = function criarUmaTarefa() {
  const valueInput = document.querySelector('#texto-tarefa');
  const list = document.createElement('li');
  list.innerHTML = valueInput.value;
  list.classList.add('tasks');
  document.querySelector('#lista-tarefas').appendChild(list);
  valueInput.value = '';
};

function limparLista() {
  const elementTask = document.querySelectorAll('.tasks');
  for (let index = 0; index < elementTask.length; index++) {
    elementTask.item(index).remove();
  }
}

function removerFinalizados() {
  const elementTask = document.querySelectorAll('.completed');
  for (let index = 0; index < elementTask.length; index++) {
    elementTask.item(index).remove();
  }
}

function marcarTarefa(event) {
  if (event.target.className.includes('tasks') && !event.target.className.includes('completed')) {
    event.target.classList.add('completed');
  } else if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  }
}

// --------------lista de botões--------------------------------
criarTarefa.addEventListener('click', criarOneTarefa);
clear.addEventListener('click', limparLista);
remove.addEventListener('click', removerFinalizados);
document.body.addEventListener('dblclick', marcarTarefa);
