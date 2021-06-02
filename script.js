  window.onload = function() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const inputBox = document.getElementById('texto-tarefa');
  let taskList = document.getElementById('lista-tarefas');
  const buttonClearList = document.getElementById('apaga-tudo');
  const buttonRemoveFinishedItem = document.getElementById('remover-finalizados')

  buttonCreateTask.addEventListener('click', createTask);
  taskList.addEventListener('click', changeTaskBGColor);
  taskList.addEventListener('dblclick', strikeOutItem);
  buttonClearList.addEventListener('click', clearList);
  buttonRemoveFinishedItem.addEventListener('click', removeFinishedItem);
  
  function createTask() {
    let inputText = inputBox.value;
    inputBox.value = '';
    let itemList = document.createElement('li');
    itemList.className = 'list-item';
    itemList.innerText = inputText;
    taskList.appendChild(itemList);
  }
  
  function changeTaskBGColor(event) {    
    let listItemsArray = document.getElementsByClassName('list-item');
    for (let index = 0; index < listItemsArray.length; index += 1) {
      if (listItemsArray[index].classList.contains('selected')) {
        listItemsArray[index].classList.remove('selected');
        listItemsArray[index].style.backgroundColor = 'white';
      } else {
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  }
  
  function strikeOutItem(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
      event.target.style.textDecoration = 'none';
    } else {
      event.target.classList.add('completed');
      event.target.style.textDecoration =  'line-through';
    }
  }

  function clearList() {
    taskList.innerHTML = '';
  }

// Para elaborar esta função abaixo, pesquisei e encontrei este link para usar de referência: https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940

  function removeFinishedItem() {
    let completedItems = document.querySelectorAll('.completed');
    for (let completed of completedItems) {
      completed.remove();
    }
  }
}
