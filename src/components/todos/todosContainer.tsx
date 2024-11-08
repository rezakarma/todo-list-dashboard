"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Separator } from "../ui/separator";
import TodoList from "./todoList";
import TodosHeader from "./todosHeder";
import { useEffect, useMemo, useState } from "react";
import { getAllTodos } from "@/store/todos-slice";
import { TodoListType } from "@/types/store.types";
import useDebounce from "@/hooks/useDebounce";
import { Todo } from "@/lib/db";

const TodosContainer = () => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search);
  // const [todos, setTodos] = useState<TodoListType>();
  //   useEffect(() => {
  //     const getAllTodos = async () => {
  //       const todos = await getTodos();
  //       setTodos(todos);
  //     };
  //     getAllTodos();
  //   }, []);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  const allTodos = useAppSelector((state) => state.todos.todos);

  const filteredTodos = useMemo(() => {
    if (!allTodos || !debouncedSearch) return allTodos;
    return allTodos.filter((todo: Todo) =>
      todo.title.toLowerCase().startsWith(debouncedSearch.toLowerCase())
    );
  }, [allTodos, debouncedSearch]);

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <TodosHeader search={search} setSearch={setSearch} />
      <Separator className="w-3/5" />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default TodosContainer;
