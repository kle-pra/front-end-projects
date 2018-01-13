const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear');
const search = document.getElementById('search');
const todoInput = document.getElementById("todo");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', onTodosubmit);
    todoList.addEventListener('click', deleteTodo);
    clearBtn.addEventListener('click', clearTodos);
    search.addEventListener('keyup', filter);
    document.addEventListener('DOMContentLoaded', loadTodos);
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
        return;
    }

    for (let i = 0; i < todos.length; i++) {
        todoList.appendChild(createTodoElement(todos[i]));
    }
}

function onTodosubmit(e) {
    e.preventDefault();
    if (todoInput.value === '') {
        return;
    }
    let todo = todoInput.value;
    todoList.appendChild(createTodoElement(todo));
    todoInput.value = '';
    persistToLocalStorage(todo);
}

function persistToLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
        todos = [];
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoElement(todo) {
    //create new todo item and append it to the collection
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.textContent = todo;
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    return li;
}

function deleteTodo(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        let todo = e.target.parentElement.parentElement.firstChild.textContent;
        e.target.parentElement.parentElement.remove();
        deleteFromLocalStorage(todo);
    }
}

function deleteFromLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
        return;
    }
    for (let i = 0; i < todos.length; i++) {
        if (todos[i] === todo) {
            todos.splice(i, 1);
        }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

function clearTodos() {
    // todoList.innerHTML="";
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    localStorage.removeItem("todos");
}

function filter(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item')
        .forEach(function (todo) {
            if (todo.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
                todo.style.display = "block";
            } else {
                todo.style.display = "none";
            }
        });

}