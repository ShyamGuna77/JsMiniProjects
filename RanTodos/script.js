// Select elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const filterOptions = document.getElementById("filter-options");

// Event Listeners
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoClick);
filterOptions.addEventListener("change", filterTodo);

// Functions

function addTodo() {
  const todoText = todoInput.value;

  if (todoText === "") return; // Prevent adding empty todo

  const todoDiv = document.createElement("li");

  const currentTime = new Date().toLocaleTimeString();

  todoDiv.innerHTML = `
    <input type="text" value="${todoText}" disabled>
    <span>${currentTime}</span>
    <button class="edit-btn">✎</button>
    <button class="complete-btn">✔</button>
    <button class="delete-btn">❌</button>
  `;

  todoList.appendChild(todoDiv);
  todoInput.value = ""; // Clear the input field
}

function handleTodoClick(e) {
  const item = e.target;

  // Delete Todo
  if (item.classList.contains("delete-btn")) {
    const todo = item.parentElement;
    todo.remove();
  }

  // Mark as Completed
  if (item.classList.contains("complete-btn")) {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

  // Edit Todo
  if (item.classList.contains("edit-btn")) {
    const todo = item.parentElement;
    const todoInputField = todo.querySelector('input[type="text"]');

    // If the input is disabled, allow editing
    if (todoInputField.disabled) {
      todoInputField.disabled = false;
      todoInputField.focus();
      item.textContent = "💾"; // Change edit button to save icon
    } else {
      // Save the edited value and disable editing
      todoInputField.disabled = true;
      item.textContent = "✎"; 
    }
  }
}

function filterTodo() {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (filterOptions.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
