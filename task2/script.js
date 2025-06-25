const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task on button click
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

// Add task function
function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.textContent = text;

  const btns = document.createElement('div');
  btns.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.innerHTML = '✔️';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '❌';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  btns.appendChild(completeBtn);
  btns.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btns);

  taskList.appendChild(li);
}
