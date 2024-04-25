// script.js
const addBtn = document.getElementById("addTodoBtn");
const newInput = document.getElementById("newTodoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
    const todoText = newInput.value.trim();
    if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        newInput.value = "";
    }
});
