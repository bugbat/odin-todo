export default function addTask(name, description) {
  const tasklist = document.querySelector('#tasklist');
  const task = document.createElement('p');
  task.textContent = name + description;
  tasklist.appendChild(task);
  console.log('function go');
  return;
}