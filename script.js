// Get the todo input, add todo button, and todo list elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

let todos = [];

// Function to add a todo
function addTodo() 
{
    const todoText = todoInput.value.trim();
    if (todoText !== '') 
        {
        const todo = 
        {
            text: todoText,
            completed: false
        };
        todos.push(todo);
        renderTodos();
        todoInput.value = '';
    }
}

// Function to delete a todo
function deleteTodo(index) 
{
    todos.splice(index, 1);
    renderTodos();
}

// Function to render todos
function renderTodos() 
{
    todoList.innerHTML = '';
    todos.forEach((todo, index) => 
        {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(todoItem);
    });
}

// Add event listener to the add todo button
addTodoBtn.addEventListener('click', addTodo);

// Add event listener to the todo input for enter key press
todoInput.addEventListener('keypress', (e) => 
    {
    if (e.key === 'Enter') 
    {
        addTodo();
    }
});
