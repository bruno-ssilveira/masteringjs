const task = document.querySelector('.task');
const addTask = document.querySelector('.addTask');
const list = document.querySelector('.list');
const del = document.querySelector('.del');

function createLi() {
	const li = document.createElement('li');
	return li;
}

function createTask(taskText) {
	const li = createLi();
	li.innerText = taskText;
	list.appendChild(li);
	createDeleteButton(li);
	cleanInput();
	saveTask();
}

function createDeleteButton(li) {
	li.innerText += ' ';
	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'delete';
	deleteButton.setAttribute('class', 'delete');
	li.appendChild(deleteButton);
}

function cleanInput() {
	task.value = '';
	task.focus();
}

task.addEventListener('keypress', function(e) {
	if(e.keyCode === 13){
		if(!task.value) return;
		createTask(task.value);
	};
})

addTask.addEventListener('click', function() {
	if(!task.value) return;
	createTask(task.value);
})

document.addEventListener('click', function(e) {
	const element = e.target;
	if(element.classList.contains('delete')){
		element.parentElement.remove();
		saveTask();
	}
})

function saveTask() {
	const liTasks = list.querySelectorAll('li');
	const listOfTasks = [];

	for(let task of liTasks) {
		let taskText = task.innerText;
		taskText = taskText.replace('delete', '').trim();
		listOfTasks.push(taskText);
	}

	const tasksJSON = JSON.stringify(listOfTasks);
	localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
	const tasks = localStorage.getItem('tasks');
	const listTasks = JSON.parse(tasks);

	for(let task of listTasks) {
		createTask(task);
	}
}
addSavedTasks();

/*
const tasks = [];

addTask.addEventListener('click', () => {
	if(task.value){
		tasks.push(task.value);
	};
	list.innerHTML = '';
	for (i of tasks) {
		let li = document.createElement('li');
		let p = document.createElement('p');
		p.textContent = i;
		let button = document.createElement('button');
		button.textContent = 'Apagar';
		button.className = 'del';
		li.className = 'tasklist';

		li.appendChild(p);
		li.appendChild(button);
		list.appendChild(li);
	};

	console.log(tasks);
});

del.addEventListener('click', () => {
	tasks.forEach((item, index) => {
		
	});
})
*/