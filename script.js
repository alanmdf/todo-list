  window.onload = function() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const inputBox = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  buttonCreateTask.addEventListener('click', createTask);

  function createTask() {
    let inputText = inputBox.value;
    inputBox.value = '';
    let itemList = document.createElement('li');
    itemList.className = 'item-lista';
    itemList.innerText = inputText;
    taskList.appendChild(itemList);
  }
  
  taskList.addEventListener('click', changeTaskBGColor)
  
  function changeTaskBGColor(event) {
      let taskListItem = event.target;
      taskListItem.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}