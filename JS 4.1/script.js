// Array to store active tasks
let tasks = [];

// Function to add a new task to the array list
function addTask() {
    const taskInput = document.getElementById('taskInput').value.trim();
    
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = '';
        displayTasks();
    } else {
        alert('Please enter a task before processing.');
    }
}

// Function to loop through the array and render each list item dynamically
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => removeTask(index);
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Function to remove a targeted task using its array index positional number
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
