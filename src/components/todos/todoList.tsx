"use client";
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import TodoItem from "./todoItem";
import { TodoListType as TodoListProps } from "@/types/store.types";

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <Card className="w-[80%]">
      <CardContent className="pt-6 p-2">
        <ScrollArea className="h-[500px] w-full">
          <div className="flex flex-col gap-2 px-3">
            {todos &&
              todos.map((item) => {
                return (
                  <TodoItem
                    status={item.status}
                    title={item.title}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TodoList;
