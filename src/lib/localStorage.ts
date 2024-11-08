import { city, LocalStorageSetting, SettingKey } from "@/types/settings.types";

export const saveSettingsToLocalStorage = (
  key: SettingKey,
  setting: LocalStorageSetting
) => {
  localStorage.setItem(key, JSON.stringify(setting));
};

export const loadSettingsFromLocalStorage = (
  key: SettingKey
): city | null | string => {
  const savedSettings = localStorage.getItem(key);
  return savedSettings ? JSON.parse(savedSettings) : null;
};
