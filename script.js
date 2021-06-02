  window.onload = function() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const inputBox = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  buttonCreateTask.addEventListener('click', createTask);

  function createTask() {
    let inputText = inputBox.value;
    inputBox.value = '';
    let itemList = document.createElement('li');
    itemList.className = 'list-item';
    itemList.innerText = inputText;
    taskList.appendChild(itemList);
    console.log(taskList);
  }
  
  taskList.addEventListener('click', changeTaskBGColor);

  let listItemsArray = document.getElementsByClassName('list-item');
  
  function changeTaskBGColor(event) {
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
}