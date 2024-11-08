"use client";
import LanguageChanger from "./LanguageChanger";
import { ThemeColorToggle } from "./theme-color-toggle";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Separator } from "./ui/separator";

const Navbar = ({ locale }: { locale: string }) => {
  return (
    <>
      <div className="flex flex-col py-4 gap-2 justify-center !h-[10%] w-full">
        <div
          className={`flex gap-2  mx-5 ${
            locale === "fa" ? "justify-start" : "justify-end"
          }`}
        >
          <LanguageChanger locale={locale} />
          <div className="flex gap-2">
            <ThemeColorToggle />
            <ThemeModeToggle />
          </div>
        </div>
      </div>
      <Separator className="" />
    </>
  );
};

export default Navbar;
