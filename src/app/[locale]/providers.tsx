"use client";

import ThemeDataProvider from "@/context/theme-data-provider";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeDataProvider>{children}</ThemeDataProvider>
    </ThemeProvider>
  );
};

export default Providers;
