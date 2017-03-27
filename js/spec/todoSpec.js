describe('Todo', function() {
    var Todo = require('../index'),
        newTodo,
        options;

    beforeEach(function() {
        options = {
            "fizz": "buzz"
        };
        newTodo = new Todo(options);
    });

    it('should exist as a object & should be defined', function() {
        expect(newTodo).toBeDefined();
    });

    it('should set `this.options` to options', function() {
        expect(newTodo.options).toBe(options);
    });
});