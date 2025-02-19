const taskForm = document.getElementById("task-form")
taskForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const taskInput = document.getElementById("new-task")
  console.log(taskInput.value, "task")

  const text = taskInput.value.trim()

  if (text) {
    const item = document.createElement("li")
    item.className = "task-item"
    item.classList.add(taskInput.value)
    const list = document.getElementById("task-list")
    const input = document.getElementById("new-task")
    item.innerHTML = `<span>${text}</span><button class="delete-button">Elimina</button>`

    list.appendChild(item)
    input.value = ""
    item.addEventListener("click", () => item.classList.toggle("completato"))
    item.querySelector(".delete-button").addEventListener("click", (e) => {
      e.stopPropagation()
      item.remove()
    })
  }
})
