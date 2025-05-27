const task = document.querySelector('.task');
const addTask = document.querySelector('.addTask');
const list = document.querySelector('.list');
const del = document.querySelector('.del');

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