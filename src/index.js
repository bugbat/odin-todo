// import _ from 'date-fns';
import addTask from './addtask.js';

const btnAddTask = document.querySelector("input[name='add-task']");
const taskTitle = document.getElementsByName('task-title');
const taskDescription = document.getElementsByName('task-description');

btnAddTask.addEventListener('click', function() {
  addTask(taskTitle, taskDescription)
});