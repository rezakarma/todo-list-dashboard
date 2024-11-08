"use client";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import TodoItem from "./todoItem";
import { TodoListType as TodoListProps } from "@/types/store.types";
import SettingItemSheet from "../settings/settingItemSheet";
import TodoForm from "./todoForm";
import { Button } from "../ui/button";
import { FilePlus2 } from "lucide-react";

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const t = useTranslations("todos");
  return (
    <Card className="w-[80%]">
      <CardContent className="pt-6 p-2">
        <ScrollArea className="h-[500px] w-full">
          <div className="flex flex-col gap-2 px-3">
            {todos &&
              todos.length > 0 &&
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
            {!todos ||
              (todos.length === 0 && (
                <div className="w-full h-full flex-col gap-2 mt-[20%] flex justify-center items-center">
                  <h1 className="text-2xl">
                    {t("notAvalibleTodo")}
                  </h1>
                  <SettingItemSheet
                    ItemForm={TodoForm}
                    title={t("add")}
                    description={t("enterTodo")}
                    value={null}
                  >
                    <Button type="submit">
                      {t("add")}
                      <FilePlus2 />
                    </Button>
                  </SettingItemSheet>
                </div>
              ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TodoList;
