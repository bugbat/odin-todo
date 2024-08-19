export function updateTaskList(taskList) {
  const div_taskList = document.querySelector('#tasklistcontent');
  div_taskList.innerHTML = "";

  if (taskList.getTasks() == false) {
    const getStarted = document.createElement('p');
    getStarted.textContent = 'Add a task to get started!';
    div_taskList.appendChild(getStarted);
  }
  else {
    taskList.getTasks().forEach(task => {
      console.log('some')

      const thisTask = document.createElement('div');
      thisTask.classList.add('task');
      const thisTaskTitle = document.createElement('p');
      thisTaskTitle.textContent = task.title;
      const thisTaskDescription = document.createElement('p');
      thisTaskDescription.textContent = task.desc;
      const thisTaskList = document.createElement('p');
      thisTaskList.textContent = task.taskList;
      const thisTaskDate = document.createElement('p');
      thisTaskDate.textContent = task.date;
      const thisTaskPriority = document.createElement('p');
      thisTaskPriority.textContent = task.priority;
    
      const deleteThisTask = document.createElement('button');
      deleteThisTask.classList.add('deletebutton');
      deleteThisTask.textContent = 'X';
      deleteThisTask.addEventListener('click', function() {
        taskList.removeTask(taskList.getTasks().indexOf(task));
        deleteThisTask.parentElement.remove();
      });
      thisTask.append(thisTaskTitle, thisTaskDescription, thisTaskDate, thisTaskPriority, thisTaskList, deleteThisTask)
      div_taskList.appendChild(thisTask);
    });
  }
}