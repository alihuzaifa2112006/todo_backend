import express from 'express'
import todoModel from '../model/todo.js'

const router = express.Router()


router.post('/postTodo', async (req, res)  => {
    try {
        const { todo_Name } = req.body
        
        // Check if todo with same name already exists
        const existingTodo = await todoModel.findOne({ todo_Name })
        if (existingTodo) {
            return res.status(400).json({ message: 'Todo with this name already exists' })
        }
        
        const todo = new todoModel({ todo_Name })
        await todo.save()
        res.status(201).json({ message: 'Todo created successfully', todo })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/getTodo', async (req, res) => {
    try {
      const todos = await todoModel.find()
  
      if (todos.length === 0) {
        return res.status(404).json({ message: 'No todos found' })
      }
  
      res.status(200).json({ todos })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  

  
export default router