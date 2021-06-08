window.onload = function () {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const inputBox = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const buttonClearList = document.getElementById('apaga-tudo');
  const buttonRemoveFinishedItem = document.getElementById('remover-finalizados');

  function createTask() {
    const inputText = inputBox.value;
    inputBox.value = '';
    const itemList = document.createElement('li');
    itemList.className = 'list-item';
    itemList.innerText = inputText;
    taskList.appendChild(itemList);
  }

  buttonCreateTask.addEventListener('click', createTask);

  function changeTaskBGColor(event) {
    const listItemsArray = document.getElementsByClassName('list-item');
    for (let index = 0; index < listItemsArray.length; index += 1) {
      if (listItemsArray[index].classList.contains('selected')) {
        listItemsArray[index].classList.remove('selected');
        listItemsArray[index].style.backgroundColor = 'white';
      } else {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
    event.target.classList.add('selected');
  }

  taskList.addEventListener('click', changeTaskBGColor);

  function strikeOutItem(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
      event.target.style.textDecoration = 'none';
    } else {
      event.target.classList.add('completed');
      event.target.style.textDecoration = 'line-through';
    }
  }

  taskList.addEventListener('dblclick', strikeOutItem);

  function clearList() {
    taskList.innerHTML = '';
  }

  buttonClearList.addEventListener('click', clearList);

  // Para elaborar esta função abaixo, pesquisei e encontrei este link para usar de referência: https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940

  function removeFinishedItem() {
    const completedItems = document.querySelectorAll('.completed');
    for (const completedItem of completedItems) {
      completedItem.remove();
    }
  }

  buttonRemoveFinishedItem.addEventListener('click', removeFinishedItem);
};
