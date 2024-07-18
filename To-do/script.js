let numOfTasks = 0;

// Event listener for adding a task
document.getElementById("submit-btn").addEventListener('click', () => {
    const textBox = document.getElementById('newTask').value;
    if (!textBox) {
        return alert("Enter the task first");
    }
    addTask(textBox);
});

// Event listener for filter change
document.getElementById("filter").addEventListener('change', () => {
    const filterType = document.getElementById("filter").value;
    showFilter(filterType);
});

// Event listener for checkboxes (event delegation)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('checkbox')) {
        const checkbox = event.target;
        
        if (checkbox.checked) {
            checkbox.parentElement.classList.add('finished');
        } else {
            checkbox.parentElement.classList.remove('finished');
        }
    } else if (event.target.classList.contains('delete-img')) {
        // Handle delete button click
        const task = event.target.closest('.to-do');
        task.remove(); // Remove the task element from the DOM
    } else if (event.target.classList.contains('edit-img')) {
        // Handle edit button click
        const task = event.target.closest('.to-do');
        editTask(task);
    }
});

// Function to filter tasks based on type
function showFilter(type) {
    const toDoElements = document.getElementsByClassName("to-do");
    const finishedElements = document.getElementsByClassName("finished");

    if(type)

    for (let element of toDoElements) {
        element.classList.toggle('hidden', type !== "to-do" && type !== "all");
    }
    for (let element of finishedElements) {
        element.classList.toggle('hidden', type !== "finished" && type !== "all");
    }
}

// Function to add a new task
function addTask(taskName) {
    numOfTasks += 1;
    const tasksTable = document.getElementById('tasks');
    const task = document.createElement('div');
    task.className = 'to-do';
    task.id = `task-${numOfTasks}`;

    const taskNameElement = document.createElement('p');
    taskNameElement.innerText = taskName;

    const taskButtons = document.createElement('span');

    const deleteBtn = document.createElement('button');
    const deleteImg = document.createElement('img');
    deleteImg.src = './imgs/delete1.png';
    deleteImg.className = 'delete-img';
    deleteBtn.appendChild(deleteImg);

    const editBtn = document.createElement('button');
    const editImg = document.createElement('img');
    editImg.src = './imgs/edit.png';
    editImg.className = 'edit-img';
    editBtn.appendChild(editImg);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);

    task.appendChild(checkbox);
    task.appendChild(taskNameElement);
    task.appendChild(taskButtons);

    tasksTable.appendChild(task);
    document.getElementById('newTask').value = "";

}

// Function to edit a task
function editTask(task) {
    const taskNameElement = task.querySelector('p');
    const taskName = taskNameElement.innerText;
    const newTaskName = prompt("Edit task:", taskName);

    if (newTaskName !== null) {
        taskNameElement.innerText = newTaskName;
    }
}
