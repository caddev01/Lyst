// Function to get the todo list

function get_todos(){
	var todos = new Array;
	var todos_str = localStorage.getItem('todo');
	if(todos_str !== null){
		todos = JSON.parse(todos_str);
	}
	return todos;
};



// Function to add a new goal

function add(){
	var task = document.getElementById('task').value;
	var todos = get_todos();
	todos.push(task);
	localStorage.setItem('todo', JSON.stringify(todos));
	show();
	return false;
};

// Function to clear any input left after a task has been added

function clearDefault(a){
	if(a.defaultValue == a.value){a.value = ''};
};

// Fuction to remove a task from the list

function remove(){
	var id = this.getAttribute('id');
	var todos = get_todos();
	todos.splice(id, 1);
	localStorage.setItem('todo', JSON.stringify(todos));
	show();
	return false;
}

// Function to display the todo list from localstorage

function show(){
	var todos = get_todos();

	var html = '<ul>';

	for(var i=0; i<todos.length; i++){
		html += '<li>'  + todos[i] + '<button class="remove" id="' + i + '">-</button></li>';
	};
	html += '</ul>';

	document.getElementById('todos').innerHTML = html;

	var buttons = document.getElementsByClassName('remove');
	for(var i=0; i<buttons.length; i++){
		buttons[i].addEventListener('click', remove);
	};

};


// Code to act when the the add button is clicked and afterward display the list with the show() function

document.getElementById('add').addEventListener('click', add);
show();