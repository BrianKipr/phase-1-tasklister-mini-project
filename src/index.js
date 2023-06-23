document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

form,addEventListener("submit", function(e){
  e.preventDefault();

  const input = document.getElementById('new-task-description');
  const taskDescription = input.value;

  const listItem = document.createElement("li")
  listItem.textContent = taskDescription;


  taskList.appendChild(listItem);

  input.value = ""
});




});