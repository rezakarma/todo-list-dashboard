"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeDataProvider from "@/context/theme-data-provider";
import { ThemeProvider } from "next-themes";
import ReduxProvider from "@/store/providers";
import WetherProvider from "./wetherProvider";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { loadSettingsFromLocalStorage } from "@/lib/localStorage";
import { useTranslations } from "next-intl";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "@/navigation";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  const t = useTranslations("welcome");
  const { toast: shadToast } = useToast();
  useEffect(() => {
    const name = loadSettingsFromLocalStorage("name");

    if (!name) {
      shadToast({
        title: t("nameError"),
        description: t("nameErrorDescription"),
        duration: 5000,
        variant: "destructive",
        action: (
          <ToastAction altText="click" className="bg-primary text-secondary">
            <Link href={"/settings"}>{t("goToSettting")}</Link>
          </ToastAction>
        ),
      });
    } else {
      shadToast({
        title: t("welcome"),
        description: t("welcomeDescription"),
        duration: 5000,
        className: "bg-green-100",
      });
    }
  }, []);
  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WetherProvider>
            <ThemeDataProvider>{children}</ThemeDataProvider>
          </WetherProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default Providers;
