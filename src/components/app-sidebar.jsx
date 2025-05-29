import * as React from "react";

import {
  IconCamera,
  IconChartBar,
  IconFileAi,
  IconFileDescription,
  IconInnerShadowTop,
  IconLayoutDashboard,
  IconPackage,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

const data = {
  user: {
    name: "Youssef Yasser",
    email: "youssefyasser2020@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Youssef+Yasser&background=random",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/adminDashboard",
      icon: IconLayoutDashboard,
    },
    {
      title: "Orders",
      url: "/adminDashboard/orders",
      icon: IconShoppingCart,
    },
    {
      title: "Products",
      url: "/adminDashboard/products",
      icon: IconPackage,
    },
    {
      title: "Users",
      url: "/adminDashboard/users",
      icon: IconUsers,
    },
    {
      title: "Analytics",
      url: "/adminDashboard/analytics",
      icon: IconChartBar,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div>
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Admin Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
