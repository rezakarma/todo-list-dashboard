import { Todo } from "@/lib/db";
export type FormValue = {
  value: string | null | undefined | Todo;
};
export type SettingItemSheetProps = {
  title: string;
  description: string;
  value: string | null | undefined | Todo;
  children: React.ReactNode;
  ItemForm: React.ComponentType<FormValue>;
};

export type city = {
  city: string;
  lat: string;
  lng: string;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
};

export type LocalStorageSetting = city | string;

export type SettingKey = "city" | "name";
