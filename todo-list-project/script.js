const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");


function addTask(){
    const task = inputBox.value.trim();
    if (!task){
        alert("Please write down a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <label>
            <input type="checkbox" class="task-checkbox">
            <span>${task}</span>
        </label>
        <span class = "edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

listContainer.appendChild(li);
inputBox.value = "";

const checkbox = li.querySelector(".task-checkbox");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

//update counters whenever the task is modified
updateCounters();

//Event listener for checkbox to mark task as compelted or uncompleted
checkbox.addEventListener("click", function() {
    li.classList.toggle("completed", checkbox.checked);
    //add the function below
    updateCounters();
});

//Event listener for edit button to edit task
editBtn.addEventListener("click", function(){
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
        checkbox.checked = false;
        updateCounters();

    }
});

//Event listener for delete button to delete task
deleteBtn.addEventListener("click", function(){
    if(confirm("Are you sure you want to delete this task?")){
        li.remove();
        updateCounters();
    }
});

}

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks =
        document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

