"use client";

import SettingsContainer from "@/components/settings/settingsContainer";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

const Settings = () => {
  const t = useTranslations("settings");
  return (
    <div className="w-full px-10 flex flex-col gap-4">
      <div>
        <h1 className="text-4xl font-bold text-primary">{t("settings")}</h1>
        <p className="font-normal">{t("settingDescription")}</p>
      </div>
      <Separator />
      <SettingsContainer />
    </div>
  );
};

export default Settings;
