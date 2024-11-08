import { Todo } from "@/lib/db";
import { city } from "./settings.types";

export type SettingStateType = {
  name: string | null;
  city: city;
};

export interface TodoListType {
  todos: Todo[] | [] | undefined;
}

export interface TodoListInfoType {
  todosInfo: {
    done: number;
    notDone: number;
    inProgress: number;
    allTodos: number;
  };
}
