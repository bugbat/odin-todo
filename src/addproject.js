import { taskList, myProjects } from "./tasks";
import { updateProjectDropdown, updateTaskList } from "./updatelist";

export function createProjectModal() {
  const newproject_div = document.querySelector(".newproject");
  const createbutton = document.querySelector("button[name='addproject']");

  const newProjectForm = document.querySelector("form[name='createproject']")

  const projectmodal_div = document.querySelector(".createproject");
  const saveButton = document.querySelector("button[name='save']");
  const cancelButton = document.querySelector("button[name='cancel']");

  createbutton.addEventListener('click', function() {
    newproject_div.style.display = 'none';
    projectmodal_div.style.display = 'flex';
  });
  
  saveButton.addEventListener('click', function() {
    newproject_div.style.display = 'flex';
    projectmodal_div.style.display = 'none';
    addProject(document.querySelector("input[name='projectname']").value);
    newProjectForm.reset();
  });
  
  cancelButton.addEventListener('click', function() {
    newproject_div.style.display = 'flex';
    projectmodal_div.style.display = 'none';
    newProjectForm.reset();
  });
}

function addProject(name) {
  const newProject = taskList(name);
  myProjects.addProject(newProject);
  myProjects.setSelection(newProject);
  updateProjectDropdown();
  updateTaskList(newProject);
}