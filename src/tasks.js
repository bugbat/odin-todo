export function task(title, desc, date, priority, taskList) {
  return { title, desc, date, priority, taskList }
}

export function taskList(title) {
  let tasks = [];
  const getTitle = () => title;
  const getTasks = () => tasks;
  const addTask = (task) => {
    tasks.push(task);
  };
  const removeTask = (index) => {
    delete tasks[index]
  }
  return { getTitle, getTasks, addTask, removeTask }
}

function projectList() {
  let list = [taskList('First'), taskList('Second')];
  let selected = list[0];

  const getSelected = () => selected;
  const getList = () => list;
  
  function setSelection(project) {
    selected = project;
    console.log('selected new: ', project.getTitle(), selected.getTitle())
  }
  function addProject(project) {
    list.push(project);
  }
  return { getList, getSelected, setSelection, addProject }
}

export const myProjects = projectList();