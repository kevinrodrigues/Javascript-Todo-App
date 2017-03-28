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

    li.appendChild(inputCheckbox);
    li.appendChild(label);
    li.appendChild(inputEdit);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);

    return li;
};

Todo.prototype.addTodoTask = function() {
    var task = this.createTodo('New todo item');
};

Todo.prototype.editTodoTask = function() {


};

module.exports = Todo;