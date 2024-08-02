// import _ from 'date-fns';
import { task, taskList } from './tasks';
import { addTask } from './addtask'

const newTaskForm = document.querySelector("form[name='new-task']")
const btnAddTask = document.querySelector("button[name='add-task']");

let userTaskLists = [taskList('Default')];

// add new task button
btnAddTask.addEventListener('click', function() {
  const newTask = task(
    document.querySelector("input[name='task-title']").value,
    document.querySelector("input[name='task-description']").value,
    document.querySelector("input[name='due-date']").value,
    document.querySelector("select[name='priority']").value,
    'project'
  );
  addTask(newTask); //adds to dom replace this later?
  newTaskForm.reset();
});
