// Wait for the DOM to fully load before running the script
// This ensures all elements are available for selection

document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to save tasks array to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage and populate the DOM
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false: don't save again
    }

    // Function to get the current tasks array from Local Storage
    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Function to add a new task to the list and optionally save to Local Storage
    function addTask(taskText, save = true) {
        // If called from button/input, get value from input
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        // Check if the input is empty
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign an event to remove the task when the button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            // Remove from Local Storage
            let tasks = getTasks();
            tasks = tasks.filter(t => t !== taskText || tasks.indexOf(t) !== Array.from(taskList.children).indexOf(li));
            saveTasks(tasks);
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (save) {
            const tasks = getTasks();
            tasks.push(taskText);
            saveTasks(tasks);
        }

        // Clear the input field if added via input
        if (taskInput.value.trim() === taskText) {
            taskInput.value = '';
        }
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', function() {
        addTask();
    });

    // Add event listener to the input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
}); 
