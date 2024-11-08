"use client";
import { useTranslations } from "next-intl";
import InfoCard from "./infoCarf";
import {
  CheckCheck,
  CircleCheck,
  Hourglass,
  LayoutList,
  ListTodo,
} from "lucide-react";
import { useAppSelector } from "@/hooks/useRedux";

const cartItems = [
  {
    title: "allTodos",
    description: "allTodosDescription",
    count: "10",
    Icon: ListTodo,
  },
  {
    title: "done",
    description: "doneDescription",
    count: "10",
    Icon: CircleCheck,
  },
  {
    title: "inProgress",
    description: "inProgressDescription",
    count: "10",
    Icon: Hourglass,
  },
  {
    title: "notDone",
    description: "notDoneDescription",
    count: "10",
    Icon: LayoutList,
  },
];

const InfoCardContainer = () => {
  const t = useTranslations("todoList");
  const todosInfo = useAppSelector((state) => state.todos.todosInfo);
  return (
    <div className="flex gap-5 justify-between w-full h-[25%]">
      {cartItems.map((item, i) => (
        <InfoCard
          key={i}
          Icon={item.Icon}
          count={todosInfo[item.title as keyof typeof todosInfo].toString()}
          description={t(item.description)}
          title={t(item.title)}
        />
      ))}
    </div>
  );
};

export default InfoCardContainer;
