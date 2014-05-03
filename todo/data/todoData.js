var db = require('./db');

/* TODO Model */
var Todo = db.model('Todo', {
    text: String,
    done: Boolean
});

exports.findAll = function(callback) {
    Todo.find(callback); 
}

exports.delete = function(obj, callback) {
    Todo.remove({ 
        _id: obj.id 
    }, callback);
}

exports.create = function(obj, callback) {

    Todo.create({
        text: obj.text,
        done: obj.done
    }, callback);  
}