import { setTodaysDate } from './setdate'
import format from 'date-fns/format';
import styles from './style.css'
import { task, taskList } from './tasks';
import { updateTaskList } from './updatelist'

const newTaskForm = document.querySelector("form[name='new-task']")
const btnAddTask = document.querySelector("button[name='add-task']");

setTodaysDate();

let projects = [taskList('Default'), taskList('Second')];
let selectedProject = projects[0];
updateTaskList(selectedProject);

const projectDropdown = document.querySelector("select[name='project']");

// populate project list dropdown
projects.forEach(project => {
  let projectEntry = document.createElement('option');
  projectEntry.value = project.getTitle();
  projectEntry.textContent = project.getTitle();
  projectDropdown.appendChild(projectEntry);
});

// handle dropdown selection
projectDropdown.addEventListener('change', function () {
  const selectedValue = projectDropdown.value;
  const newSelection = projects.find((p) => p.getTitle() === selectedValue);
  if (newSelection) {
    selectedProject = newSelection;
  };
  updateTaskList(selectedProject);
});

// add new task button
btnAddTask.addEventListener('click', function() {
  if (document.querySelector("input[name='task-title']").value) {
    const newTask = task(
      document.querySelector("input[name='task-title']").value,
      document.querySelector("input[name='task-description']").value,
      format(new Date(document.querySelector("input[name='due-date']").value), "MM/dd/yyyy"),
      document.querySelector("select[name='priority']").value,
      selectedProject.getTitle()
    );
    selectedProject.addTask(newTask);
    updateTaskList(selectedProject);
    newTaskForm.reset();
    setTodaysDate();
  }
});
