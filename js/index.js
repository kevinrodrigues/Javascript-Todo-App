function Todo(options) {
    if (!(this instanceof Todo)){
        return new Todo(options);
    }

    this.options = options;
}

Todo.prototype.createTodo = function(todoTask) {
    var li = document.createElement('li'),
        inputCheckbox = document.createElement('input'),
        label = document.createElement('label'),
        inputEdit = document.createElement('input'),
        buttonEdit = document.createElement('button'),
        buttonDelete = document.createElement('button');

    inputCheckbox.type = 'checkbox';
    inputEdit.type = 'text';
    buttonEdit.innerText = 'Edit';
    buttonEdit.className = 'edit';
    buttonDelete.innerText = 'Delete';
    buttonDelete.className = 'delete';
    label.innerText = todoTask;

    listItem.appendChild(inputCheckbox);
    listItem.appendChild(label);
    listItem.appendChild(inputEdit);
    listItem.appendChild(buttonEdit);
    listItem.appendChild(buttonDelete);

    return li;
};

Todo.prototype.addTodoTask = function() {
    var task = this.createTodo('New todo item');
};



module.exports = Todo;