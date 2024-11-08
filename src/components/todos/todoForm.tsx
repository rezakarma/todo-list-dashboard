"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { todoSchema } from "@/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import React, { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { addTodo, updateTodo } from "@/lib/todoOpreations";
import { Todo } from "@/lib/db";
import { FormValue } from "@/types/settings.types";
import { getAllTodos } from "@/store/todos-slice";
import { useAppDispatch } from "@/hooks/useRedux";
const TodoForm: React.FC<FormValue> = ({ value: todo }) => {
  const [isPendingTransition, startTransition] = useTransition();
  const t = useTranslations("todos");
  const dispatch = useAppDispatch();

  function isTodo(value: unknown): value is Todo {
  return (
    typeof value === "object" &&
    value !== null && // Ensure value is not null
    "title" in value &&
    "status" in value
  );
}
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: isTodo(todo) ? todo.title : "",
    },
  });

  function onSubmit(values: z.infer<typeof todoSchema>) {
    startTransition(async () => {
      if (todo && isTodo(todo)) {
        await updateTodo({ ...todo, title: values.title });
      } else {
        await addTodo({ status: "notDone", ...values });
      }
      dispatch(getAllTodos());
      toast.success(t("save"), {
        className: "bg-green-100",
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("enterTodo")}</FormLabel>
              <FormControl>
                <Input placeholder={t("enterTodo")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPendingTransition}>
          {t("add")}

          {isPendingTransition && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
