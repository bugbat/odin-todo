export function task(title, desc, date, priority, taskList) {
  return { title, desc, date, priority, taskList }
}

export function taskList(title) {
  let tasks = [];
  const getTitle = () => title;
  const addTask = (task) => {
    tasks.push(task);
  };
  return { tasks, getTitle, addTask }
}

export let taskLists = [];