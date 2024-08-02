export function addTask(task) {
  const tasklist = document.querySelector('#tasklist');
  const thisTask = document.createElement('div');
  const thisTaskDetails = document.createElement('p');
  thisTaskDetails.textContent = task.title + ' ' + task.desc;

  const deleteThisTask = document.createElement('button');
  deleteThisTask.textContent = 'X';
  deleteThisTask.addEventListener('click', function() {
    deleteThisTask.parentElement.remove();
  });
  
  thisTask.append(thisTaskDetails, deleteThisTask)
  tasklist.appendChild(thisTask);
}