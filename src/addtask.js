export function addTask(task) {
  const tasklist = document.querySelector('#tasklist');
  const thisTask = document.createElement('div');
  const thisTaskDetails = document.createElement('p');
  thisTaskDetails.textContent = task.title + ' ' + task.desc + ' ' + task.taskList;

  const deleteThisTask = document.createElement('button');
  deleteThisTask.textContent = 'X';
  deleteThisTask.addEventListener('click', function() {
    deleteThisTask.parentElement.remove();
  });
  
  thisTask.append(thisTaskDetails, deleteThisTask)
  tasklist.appendChild(thisTask);
}

export function updateTaskList(taskList) {
  const div_taskList = document.querySelector('#tasklist');
  div_taskList.innerHTML = "";

  taskList.getTasks().forEach(task => {
    const thisTask = document.createElement('div');
    const thisTaskDetails = document.createElement('p');
    thisTaskDetails.textContent = task.title + ' ' + task.desc + ' ' + task.taskList;
  
    const deleteThisTask = document.createElement('button');
    deleteThisTask.textContent = 'X';
    deleteThisTask.addEventListener('click', function() {
      taskList.removeTask(taskList.getTasks().indexOf(task));
      deleteThisTask.parentElement.remove();
    });
    thisTask.append(thisTaskDetails, deleteThisTask)
    div_taskList.appendChild(thisTask);
  });

  
}