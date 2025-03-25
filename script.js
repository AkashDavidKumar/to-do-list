 // Wait until the DOM is fully loaded
 document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Event listener for adding tasks
    addBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create a new task element with checkbox
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = ''; // Clear the input field
    });

    // Create a task element (with checkbox and delete button)
    function createTaskElement(taskText) {
        const li = document.createElement('li');
       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.cssText = 'margin-right: 10px;';
        checkbox.addEventListener('change', toggleTaskCompletion);

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        return li;
    }

    // Toggle task completion (strikethrough)
    function toggleTaskCompletion(event) {
        const taskElement = event.target.parentElement;
        const taskText = taskElement.querySelector('span');

        if (event.target.checked) {
            taskElement.classList.add('completed');
        } else {
            taskElement.classList.remove('completed');
        }
    }

    // Delete task
    function deleteTask(event) {
        const taskElement = event.target.parentElement;
        taskElement.remove();
    }
});