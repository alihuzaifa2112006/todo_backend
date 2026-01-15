import mongoose from 'mongoose'


const todoSchema = new mongoose.Schema({
    todo_Name: {
        type: String,
        required: true,
    }

})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo