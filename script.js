  window.onload = function() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const inputBox = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  buttonCreateTask.addEventListener('click', createTask);
  console.log(buttonCreateTask);
  console.log(inputBox);
  
  function createTask() {
    let inputText = inputBox.value;
    inputBox.value = '';
    let itemList = document.createElement('li');
    itemList.className = 'item-lista';
    itemList.innerText = inputText;
    taskList.appendChild(itemList);
  }
}
