import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  BinocularsIcon,
  ChartLineUpIcon,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// This is sample data.
const data = {
  navMain: [
    {
      title: (
        <>
          <ChartLineUpIcon size={40} color="#f8f9fc" />
          Início
        </>
      ),
      url: "/feed",
    },
    {
      title: (
        <>
          <BinocularsIcon size={40} color="#f8f9fc" />
          Explorar
        </>
      ),
      url: "/explorar",
    },
    {
      title: (
        <>
          <UserIcon size={40} color="#f8f9fc" />
          Perfil
        </>
      ),
      url: "/perfil",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/feed">
                <Image
                  src="/assets/logo-anikokoro.svg"
                  width={128}
                  height={41}
                  alt=""
                  priority
                  className=""
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium h-10">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/Kelvin_Knight.png"
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full aspect-square object-cover border-gray-950 border"
            />
            <span className="text-gray-200 text-sm">Cristofer Rosser</span>
          </div>
          <Button variant="ghost" size={"icon-lg"}>
            <SignOutIcon size={40} color="#f40c34" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
