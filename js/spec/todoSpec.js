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

    it('should be defined and represent an object', function() {
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

    describe('`createTodo` prototype method', function() {
        it('should be defined', function() {
            expect(newTodo.createTodo).toBeDefined();
        });

        describe('when invoked', function() {
            var fakeListContent = 'My Pretty List',
                fakeLi = '<li>' + fakeListContent+ '</li>';

            beforeEach(function() {
                spyOn(newTodo, 'createTodo').and.returnValue(fakeLi);
            });

            it('should return a `list`', function() {
                expect(newTodo.createTodo()).toBe(fakeLi);
            });
        });
    });
});