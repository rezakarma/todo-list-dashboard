"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { nameShcema } from "@/schema";
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
import {
  loadSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from "@/lib/localStorage";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAppSelector } from "@/hooks/useRedux";
import { settingSliceAction } from "@/store/setting-slice";
import { useDispatch } from "react-redux";
import { FormValue } from "@/types/settings.types";
const SettingNameForm: React.FC<FormValue> = ({ value }) => {
  const t = useTranslations("settings");
  const [isPendingTransition, startTransition] = useTransition();
  const dispatch = useDispatch();
  const currentName = useAppSelector((state) => state.settings.name);
  const form = useForm<z.infer<typeof nameShcema>>({
    resolver: zodResolver(nameShcema),
    defaultValues: {
      name: currentName ? currentName : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof nameShcema>) {
    startTransition(() => {
      saveSettingsToLocalStorage("name", values.name);
      dispatch(settingSliceAction.getName());

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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("enterName")}</FormLabel>
              <FormControl>
                <Input placeholder={t("name")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPendingTransition}>
          {t("submit")}

          {isPendingTransition && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SettingNameForm;
