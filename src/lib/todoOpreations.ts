import { db, Todo } from "./db";

// Add a new todo
export const addTodo = async (todo: Todo) => {
    await db.todos.add(todo);
  };
  
  // Get all todos
  export const getTodos = async () => {
    return await db.todos.toArray();
  };
  
  // Update a todo
  export const updateTodo = async (todo: Todo) => {
    await db.todos.put(todo);
  };
  
  // Delete a todo
  export const deleteTodo = async (id: number) => {
    await db.todos.delete(id);
  };