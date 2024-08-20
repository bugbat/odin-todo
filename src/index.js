import { setTodaysDate } from './setdate'
import format from 'date-fns/format';
import styles from './style.css'
import { task, myProjects } from './tasks';
import { updateTaskList, updateProjectDropdown } from './updatelist'
import { createProjectModal } from './addproject';

const newTaskForm = document.querySelector("form[name='taskform']")
const btnAddTask = document.querySelector("button[name='add-task']");

createProjectModal();
setTodaysDate();
updateProjectDropdown();
updateTaskList(myProjects.getSelected());

// add new task button
btnAddTask.addEventListener('click', function() {
  if (document.querySelector("input[name='task-title']").value) {
    const newTask = task(
      document.querySelector("input[name='task-title']").value,
      document.querySelector("input[name='task-description']").value,
      format(new Date(document.querySelector("input[name='due-date']").value), "MM/dd/yyyy"),
      document.querySelector("select[name='priority']").value,
      myProjects.getSelected().getTitle()
    );
    myProjects.getSelected().addTask(newTask);
    updateTaskList(myProjects.getSelected());
    newTaskForm.reset();
    setTodaysDate();
  }
});
