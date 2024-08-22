import { myProjects } from "./tasks";

export function updateTaskList(project) {
  const div_taskList = document.querySelector("#tasklistcontent");
  div_taskList.innerHTML = "";

  if (project.getTasks() == false) {
    const getStarted = document.createElement("p");
    getStarted.classList.add("getstarted");
    getStarted.textContent = "Add a task to get started!";
    div_taskList.appendChild(getStarted);
  } else {
    project.getTasks().forEach((task) => {
      const thisTask = document.createElement("div");
      thisTask.classList.add("task");
      const thisTaskTitle = document.createElement("p");
      thisTaskTitle.textContent = task.title;
      const thisTaskDescription = document.createElement("p");
      thisTaskDescription.textContent = task.desc;
      const thisTaskList = document.createElement("p");
      thisTaskList.textContent = task.taskList;
      const thisTaskDate = document.createElement("p");
      thisTaskDate.textContent = task.date;
      const thisTaskPriority = document.createElement("p");
      thisTaskPriority.textContent = task.priority;

      const deleteThisTask = document.createElement("button");
      deleteThisTask.classList.add("deletebutton");
      deleteThisTask.textContent = "X";
      deleteThisTask.addEventListener("click", function () {
        taskList.removeTask(taskList.getTasks().indexOf(task));
        deleteThisTask.parentElement.remove();
      });
      thisTask.append(
        thisTaskTitle,
        thisTaskDescription,
        thisTaskDate,
        thisTaskPriority,
        thisTaskList,
        deleteThisTask,
      );
      div_taskList.appendChild(thisTask);
    });
  }
}

export function updateProjectDropdown() {
  const projectDropdown = document.querySelector("select[name='project']");
  projectDropdown.innerHTML = "";
  myProjects.getList().forEach((project) => {
    let projectEntry = document.createElement("option");
    projectEntry.value = project.getTitle();
    projectEntry.textContent = project.getTitle();
    projectDropdown.appendChild(projectEntry);
  });
  setDropdownEvents();
}

function setDropdownEvents() {
  const projectDropdown = document.querySelector("select[name='project']");
  projectDropdown.addEventListener("change", function () {
    const selectedValue = projectDropdown.value;
    const newSelection = myProjects
      .getList()
      .find((p) => p.getTitle() === selectedValue);
    if (newSelection) {
      myProjects.setSelection(newSelection);
    }
    updateTaskList(myProjects.getSelected());
  });
}
