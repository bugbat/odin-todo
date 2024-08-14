// import _ from 'date-fns';
import { task, taskList } from './tasks';
import { updateTaskList } from './updatelist'

const newTaskForm = document.querySelector("form[name='new-task']")
const btnAddTask = document.querySelector("button[name='add-task']");

let projects = [taskList('Default'), taskList('Second')];

// populate project list dropdown
const projectDropdown = document.querySelector("select[name='project']");
projects.forEach(project => {
  let projectEntry = document.createElement('option');
  projectEntry.value = project.getTitle();
  projectEntry.textContent = project.getTitle();
  projectDropdown.appendChild(projectEntry);
});

// add new task button
btnAddTask.addEventListener('click', function() {
  const newTask = task(
    document.querySelector("input[name='task-title']").value,
    document.querySelector("input[name='task-description']").value,
    document.querySelector("input[name='due-date']").value,
    document.querySelector("select[name='priority']").value,
    projects[0].getTitle()
  );

  projects[0].addTask(newTask);
  updateTaskList(projects[0]);
  newTaskForm.reset();
});
