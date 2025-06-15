function addTask() {
  const input = document.getElementById("taskInput");
  const li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.classList.toggle("done");

  const del = document.createElement("button");
  del.textContent = "X";
  del.onclick = () => li.remove();

  li.appendChild(del);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
