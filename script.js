(() => {
    let totalTasks = 0;
    let completedTasks = 0;
    let currentFilter = 'all'; // Default filter

    const todoInput = document.getElementById('todo-input');
    const dueDateInput = document.getElementById('due-date');
    const categorySelect = document.getElementById('category-select');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    const completionMeter = document.getElementById('completion-meter');
    const completionText = document.getElementById('completion-text');
    const filterButtons = document.querySelectorAll('.filter-buttons button');

    // Function to change background color
    function changeBackgroundColor() {
        const colors = [
            '#e0f7fa', '#b2ebf2', '#80deea',
            '#4dd0e1', '#26c6da', '#00bcd4', '#0097a7'
        ];
        let currentIndex = 0;

        setInterval(() => {
            document.body.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }, 3000);
    }

    // Call the function to start the background color animation
    changeBackgroundColor();

    function addTask(todoText, dueDate, category) {
        const li = createTaskElement(todoText, dueDate, category);
        todoList.appendChild(li);
        totalTasks++;
        updateCompletionMeter();
        clearInputs();
    }

    function createTaskElement(todoText, dueDate, category) {
        const li = document.createElement('li');
        li.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;
        taskSpan.classList.add('task-text');

        const dateSpan = document.createElement('span');
        dateSpan.textContent = new Date(dueDate).toLocaleDateString();
        dateSpan.classList.add('due-date');

        const categorySpan = document.createElement('span');
        categorySpan.textContent = category;
        categorySpan.classList.add('category-text');

        const completeButton = createButton('Complete', 'green', () => {
            completedTasks++;
            updateCompletionMeter();
            li.style.textDecoration = 'line-through';
            completeButton.disabled = true;
            filterTasks(currentFilter);
        });

        const deleteButton = createButton('Delete', 'red', () => {
            li.remove();
            totalTasks--;
            updateCompletionMeter();
            filterTasks(currentFilter);
        });

        li.append(taskSpan, dateSpan, categorySpan, completeButton, deleteButton);
        return li;
    }

    function createButton(text, color, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.marginLeft = '10px';
        button.style.background = color;
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.addEventListener('click', clickHandler);
        return button;
    }

    function updateCompletionMeter() {
        const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        completionMeter.value = completionPercentage;
        completionText.textContent = `Completion: ${Math.round(completionPercentage)}%`;
    }

    function clearInputs() {
        todoInput.value = '';
        dueDateInput.value = '';
        categorySelect.value = 'Work';
    }

    function filterTasks(filter) {
        const tasks = document.querySelectorAll('#todo-list .task-item');
        tasks.forEach(task => {
            const isCompleted = task.querySelector('button[style*="green"]').disabled;
            if (filter === 'all' || (filter === 'completed' && isCompleted) || (filter === 'pending' && !isCompleted)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    }

    addTodoButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        const dueDate = dueDateInput.value;
        const category = categorySelect.value;
        if (todoText && dueDate) {
            addTask(todoText, dueDate, category);
        } else {
            alert('Please enter a task and a due date!');
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentFilter = this.id.replace('show-', '');
            filterTasks(currentFilter);
        });
    });
})();
const quotes= [
    {text:'Action will destory your procrastination.', author:'Og Mandino'},
    {text:"Never put off tomorrow what you can do today.", author:'Thomas Jefferson'}, 
    {text: 'Procrastination is the thief of time.', author:'Charles Dickens'}, 
    {text:"Time wasted is existence, used is life. ", author: 'Edward Young'},
    {text:"Getting an idea should be like sitting on a pin, it should make you jump up and do something.", author:'E.L.Simpson'},
    {text:"The only difference between success and failure is the ability to take action.", author:'Alexander Graham Bell'},
    {text:'Someday is not a day of the week.', author:'Janet Dailey'},
    {text:"Procrastination is oppotunity's natural assassin.", author:'Victor Kiam'},
    {text:"The greatest amount of wasted time is time not getting started.", author:"Dawson Trotman"},
    {text:"A year from now you may wish you had started today.", author:"Karen Lamb"},
    {text:"Things may come to those who wait, but only the things left by those who hustle.", author:'Abramham Lincoln'},


]
function generateQuote() {
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    const quote = quotes[randomIndex].text;
    const author = quotes[randomIndex].author;
    
    document.getElementById("quote").innerText = `"${quote}"`;
    document.getElementById("author").innerText = `- ${author}`;
}
// Example: Assuming you have a list of tasks and a way to track completion

let totalTasks = 0;
let completedTasks = 0;

// Function to update the meter bar
function updateCompletionMeter() {
    let completionPercentage = (completedTasks / totalTasks) * 100;
    document.getElementById("completion-meter").value = completionPercentage;
}

// Add tasks and mark them as completed
function addTask() {
    totalTasks += 1; // Adds one task
    updateCompletionMeter();
}

function completeTask() {
    completedTasks += 1; // Completes one task
    updateCompletionMeter();
}




