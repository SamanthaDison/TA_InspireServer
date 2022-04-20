import { dbContext } from "../db/DbContext"

class TodosService {
    async getAllTodos(query = {}) {
        const todos = await dbContext.Todos.find(query)
        return todos
    }
    async createTodo(body) {
        const newTodo = await dbContext.Todos.create(body)
        return newTodo
    }
    async editTodo(id, todoToEdit) {
        const editedTodo = await dbContext.Todos.findById(id)
        editedTodo.description = todoToEdit.description || editedTodo.description
        editedTodo.completed = todoToEdit.completed != null ? todoToEdit.completed : editedTodo.complete
        editedTodo.save()
        return editedTodo
    }

    async removeTodo(id) {
        return await dbContext.Todos.findByIdAndDelete(id)
    }
}

export const todosService = new TodosService()