"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { FilePlus2, Search } from "lucide-react";
import SettingItemSheet from "../settings/settingItemSheet";
import TodoForm from "./todoForm";
import { Dispatch, SetStateAction } from "react";
interface TodosHeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const TodosHeader: React.FC<TodosHeaderProps> = ({ search, setSearch }) => {
  const t = useTranslations("todos");
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input
        type="text"
        placeholder={t("search") + "..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex  gap-2">
        <Button type="submit">
          {t("search")}
          <Search />
        </Button>
        <Separator orientation="vertical" className="h-10" />
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
    </div>
  );
};

export default TodosHeader;
