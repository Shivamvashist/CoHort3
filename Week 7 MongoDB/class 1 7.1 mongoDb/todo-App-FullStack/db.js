const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    username: String,
    email: String,
    name: String,
    Password: String
})

const todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("users",User);
const TodoModel = mongoose.model("tdos",todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
} 