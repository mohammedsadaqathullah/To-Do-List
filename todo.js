let inputs = document.querySelector('.taskinput')
let add = document.querySelector('.btn')
let todolist = document.querySelector('.list')
let btnG = document.querySelector('.btnG')
let todos = [];


window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(tasks => addtodo(tasks));
}

add.addEventListener('click', () => {
    if (inputs.value !== '') {
        todos.push(inputs.value)
        localStorage.setItem('todos', JSON.stringify(todos))
        addtodo(inputs.value)
        inputs.value = '';
    } else {
        inputs.value = 'please enter valid task';
    }
})
function addtodo(tasks) {
    var para = document.createElement('p')
    para.innerText = '# ' + tasks;
    todolist.appendChild(para)
    para.classList.add('paras')
    var btnG = document.createElement('div')
    todolist.appendChild(btnG)
    btnG.classList.add('btnG')
    var para2 = document.createElement('p')
    btnG.appendChild(para2)
    para2.classList.add('para2')
    var btnss = document.createElement('button')
    para2.appendChild(btnss)
    btnss.classList.add('edit')
    btnss.textContent = 'Edit';
    var btn3 = document.createElement('button')
    para2.appendChild(btn3)
    btn3.textContent = 'Task Done';
    btn3.classList.add('taskdone')
    var btn4 = document.createElement('button')
    para2.appendChild(btn4)
    btn4.textContent = 'Delete';
    btn4.classList.add('delete')
    btn3.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        para.style.backgroundColor = "rgb(20, 50, 2)";
        para.style.transform = 'skew(4deg)';
        para2.textContent = 'It will be removed automatically once you refresh';
        remove(tasks)
    })
    btn4.addEventListener('click', () => {
        todolist.removeChild(para)
        todolist.removeChild(btnG)
        remove(tasks);
    })
    btnss.addEventListener('click', function () {
        inputs.value = para.textContent
        todolist.removeChild(para)
        todolist.removeChild(btnG)
        remove(tasks)
    })
}
function remove(tasks) {
    let index = todos.indexOf(tasks)
    if (index > -1) {
        todos.splice(index, 1)
    } localStorage.setItem('todos', JSON.stringify(todos))

}
