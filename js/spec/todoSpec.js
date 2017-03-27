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

    it('should should be defined and represent an object', function() {
        expect(typeof newTodo).toBeDefined();
        expect(typeof newTodo).toBe('object');
    });

    it('should set `this.options` to options', function() {
        expect(newTodo.options).toBe(options);
    });

    describe('when `Todo` is not an instance of it\'s self, i.e called without the new keyword', function() {
        beforeEach(function() {
            newTodo = Todo(options);
        });

        it('should call the `Constructor` with the keyword `new`', function() {
            expect(newTodo).toEqual(new Todo(options));
        });
    });
});