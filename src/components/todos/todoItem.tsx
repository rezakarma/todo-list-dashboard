"use client";
import { Card, CardContent } from "../ui/card";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Todo, TodoStaus } from "@/lib/db";
import { deleteTodo, updateTodo } from "@/lib/todoOpreations";
import { toast } from "sonner";
import SettingItemSheet from "../settings/settingItemSheet";
import TodoForm from "./todoForm";
import { useAppDispatch } from "@/hooks/useRedux";
import { getAllTodos } from "@/store/todos-slice";

const statusList = ["done", "inProgress", "notDone"];

const TodoItem: React.FC<Todo> = ({ status, title, id }) => {
  const dispatch = useAppDispatch();

  const t = useTranslations("todos");
  const chnageStatusHandler = async (value: string) => {
    await updateTodo({ id, title, status: value as TodoStaus });
    dispatch(getAllTodos());
    toast.success(t("save"), {
      className: "bg-green-100",
    });
  };
  const deleteHandler = async () => {
    if (id) {
      await deleteTodo(id);
      dispatch(getAllTodos());
      toast.success(t("save"), {
        className: "bg-green-100",
      });
    }
  };
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <Badge variant="default" className="w-fit h-fit">
              {t(status)}
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-red-600"
              onClick={deleteHandler}
            >
              <Trash2 />
            </Button>

            <SettingItemSheet
              ItemForm={TodoForm}
              title=""
              description=""
              value={{ status, title, id } as Todo}
            >
              <Button variant={"ghost"} size={"icon"}>
                <Pencil />
              </Button>
            </SettingItemSheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"icon"}>
                  <EllipsisVertical className="!h-7 !w-7" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{t("selectStatus")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={status}
                  onValueChange={chnageStatusHandler}
                >
                  {statusList.map((item) => {
                    return (
                      <DropdownMenuRadioItem value={item}>
                        {t(item)}
                      </DropdownMenuRadioItem>
                    );
                  })}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
