import { TodoStaus } from "@/lib/db";
import { getTodos } from "@/lib/todoOpreations";
import { TodoListInfoType, TodoListType } from "@/types/store.types";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoListType & TodoListInfoType = {
  todos: undefined,
  todosInfo: {
    allTodos: 0,
    done: 0,
    notDone: 0,
    inProgress: 0,
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getAllTodos.fulfilled,
      (state, action: PayloadAction<TodoListType>) => {
        if (action.payload.todos) {
          state.todos = action.payload.todos;
          const statusCounts = action.payload.todos.reduce<
            Record<TodoStaus, number>
          >(
            (acc, todo) => {
              acc[todo.status] = (acc[todo.status] || 0) + 1; // TypeScript now knows acc can have keys of TodoStatus type
              return acc;
            },
            {
              done: 0,
              notDone: 0,
              inProgress: 0,
            }
          );
          state.todosInfo = {
            allTodos: action.payload.todos?.length,
            ...statusCounts,
          };
        }
      }
    );
  },
});

export const getAllTodos = createAsyncThunk("todos/getAllTodos", async () => {
  const response = await getTodos();
  return { todos: response };
});

export default todoSlice;
export const todoSliceAction = todoSlice.actions;
