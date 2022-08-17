const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const headerButton = document.querySelector('.header-button')

const toDoData = [
    function () {
        todoList.textContent = localStorage.getItem('.todo-list').JSON.parse
        todoCompleted.textContent = localStorage.getItem('.todo-completed').JSON.parse
    }
]

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach(function (item) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })

        li.querySelector('.todo-remove').addEventListener('click', function () {
            if (item.completed) {
                todoCompleted.remove(li)
            } else {
                todoList.remove(li)
            }
            render()
        })
    })
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault()

    const newToDo = {
        text: headerInput.value,
        completed: false,
    }

    if (headerInput.value === '') {
        alert('Введите заметку')
    } else {
        toDoData.push(newToDo)
        headerInput.value = ''
        render()
    }
})

headerButton.addEventListener('click', function () {
    localStorage.setItem('.todo-list', headerInput.value).JSON.stringify
    localStorage.setItem('todo-completed', headerInput.value).JSON.stringify
})

toDoData()

