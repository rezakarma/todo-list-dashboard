"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
// import { sidebarItemStyle } from "@/lib/sideBarItemStyle";
import { isActive } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";
import { LayoutDashboard, ListTodo, Settings } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

const items = [
  {
    title: "dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "todo-list",
    url: "#",
    icon: ListTodo,
  },
  {
    title: "settings",
    url: "#",
    icon: Settings,
  },
];

const sidebarItemStyle = (
  routeIsActive: boolean,
  state: "expanded" | "collapsed"
) => {
  let buttonStyle = "";
  let iconStyle = "";
  if (routeIsActive && state === "expanded") {
    buttonStyle = "!bg-primary !text-secondary";
  } else if (routeIsActive && state === "collapsed") {
    buttonStyle = "text-primary";
  }
  if (routeIsActive && state === "expanded") {
    iconStyle = "!text-secondary";
  } else if (routeIsActive && state === "collapsed") {
    iconStyle = "bg-primary text-secondary p-1 rounded";
  } else if (!routeIsActive && state === "collapsed") {
    iconStyle = "!text-primary";
  } else if (!routeIsActive && state === "expanded") {
    iconStyle = "!text-primary";
  }
  return { buttonStyle, iconStyle };
};


export function AppSidebar() {
  const t = useTranslations("sidebar");
  const { state } = useSidebar();

  const locale = useLocale();
  const currentPath = usePathname();


  return (
    <Sidebar
      className="h-[90%] !self-end text-3xl"
      side={locale === "fa" ? "right" : "left"}
      collapsible={"icon"}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item, i) => {
                const routeIsAcrive = isActive(currentPath, item.url);
                const { buttonStyle, iconStyle } = sidebarItemStyle(
                  routeIsAcrive,
                  state
                );
                return (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton
                      asChild
                      className={`text-xl ${buttonStyle}`}
                      isActive={routeIsAcrive}
                    >
                      <Link href={item.url} className={"text-xl"}>
                        <item.icon
                          className={`!w-[25px] !h-[25px] ${iconStyle}`}
                        />
                        <span>{t(item.title)}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
