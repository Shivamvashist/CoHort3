const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: String,
    username: String,
    password: String
})

const todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("users",User);
const TodoModel = mongoose.model("todos",todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
} 