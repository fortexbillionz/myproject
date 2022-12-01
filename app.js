//New Task Created
const newTask = document.getElementById('new-task')

// For the UL
const taskList = document.getElementById('task-list')

//The Add Button
const addBtn = document.getElementById('addTaskBtn')


//Delete Item
const deleteItem = document.querySelector('.delete-item')

//Event
addBtn.addEventListener('click', onclick);

//Onclick Function
function onclick() {
    const emptyField = document.querySelector('#empty-field')
    emptyField.style.display = 'none'
    let newTaskItem = document.createElement('li')
    newTaskItem.className = 'task-item'
    const newIcon = document.createElement('i')
    newIcon.className = 'fa-solid fa-trash'
    let deleteButton = document.createElement("a")
    deleteButton.setAttribute('href', '#')
    deleteButton.className = 'delete-item'
    deleteButton.id = 'remove-btn'
    deleteButton.appendChild(newIcon)
    newTaskItem.appendChild(document.createTextNode(newTask.value))
    newTaskItem.appendChild(deleteButton)
    taskList.appendChild(newTaskItem)

    //Event the delete list Item
    deleteButton.addEventListener('click', deletebtn);

    //deletebtn Function
    function deletebtn() {
        deleteButton.parentElement.remove();
    }

    //Clear Button
    const clearBtn = document.getElementById('clearBtn')
    clearBtn.addEventListener('click', clear)

    function clear() {
        taskList.innerHTML = ''
        emptyField.style.display = 'block'

    }

    if (taskList.innerHTML === '') {
        emptyField.style.display = 'block'
    }
}