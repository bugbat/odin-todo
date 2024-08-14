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