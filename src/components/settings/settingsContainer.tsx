"use client";

import { useLocale, useTranslations } from "next-intl";
import SettingItem from "./settingItem";
import { ThemeColorToggle } from "../theme-color-toggle";
import { ThemeModeToggle } from "../theme-mode-toggle";
import LanguageChanger from "../LanguageChanger";
import SettingItemWrapper from "./settingItemWrapper";
import SettingItemSheet from "./settingItemSheet";
import SettingNameForm from "./settingsForm/settingNameForm";
import { Button } from "../ui/button";
import { UserPen, UserPlus } from "lucide-react";
import SettingCityForm from "./settingsForm/settingCityForm";
import { useAppSelector } from "@/hooks/useRedux";

const SettingsContainer = () => {
  const t = useTranslations("settings");
  const locale = useLocale();
  const { name, city } = useAppSelector((state) => state.settings);
  return (
    <div className="flex flex-col gap-5">
      <SettingItem value={name? name: undefined} plceholder={t("name")} label={t("enterName")}>
        <SettingItemSheet
          ItemForm={SettingNameForm}
          title={t("enterName")}
          description={t("nameDescription")}
          value={name}
        >
          <Button type="submit">{true ? <UserPen /> : <UserPlus />}</Button>
        </SettingItemSheet>
      </SettingItem>

      <SettingItem value={city?.city} plceholder={t("city")} label={t("enterCity")}>
        <SettingItemSheet
          ItemForm={SettingCityForm}
          title={t("enterCity")}
          description={t("cityDescription")}
          value={city?.city}
        >
          <Button type="submit">{true ? <UserPen /> : <UserPlus />}</Button>
        </SettingItemSheet>
      </SettingItem>

      <SettingItemWrapper label={t("language")}>
        <LanguageChanger locale={locale} />
      </SettingItemWrapper>
      <SettingItemWrapper label={t("theme")}>
        <ThemeColorToggle />
      </SettingItemWrapper>
      <SettingItemWrapper label={t("darkMode")}>
        <ThemeModeToggle />
      </SettingItemWrapper>
    </div>
  );
};

export default SettingsContainer;
