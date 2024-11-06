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
import { DesktopIcon } from "@radix-ui/react-icons";

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
  return (
    <div className="flex gap-5 justify-between w-full">
      {/* <InfoCard
        Icon={CheckCheck}
        count="10"
        description="SDFS"
        title={t("allTodos")}
      />
      <InfoCard
        Icon={CheckCheck}
        count="10"
        description="SDFS"
        title={t("done")}
      />
      <InfoCard
        Icon={CheckCheck}
        count="10"
        description="SDFS"
        title={t("inProgress")}
      />
      <InfoCard
        Icon={CheckCheck}
        count="10"
        description="SDFS"
        title={t("notDone")}
      /> */}
      {cartItems.map((item, i) => (
        <InfoCard
          key={i}
          Icon={item.Icon}
          count={item.count}
          description={t(item.description)}
          title={t(item.title)}
        />
      ))}
    </div>
  );
};

export default InfoCardContainer;
