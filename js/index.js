function Todo(options) {
    if (!(this instanceof Todo)){
        return new Todo(options);
    }

    this.options = options;
}

module.exports = Todo;