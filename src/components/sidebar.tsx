"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Church, HelpCircle, LogOut, Menu } from "lucide-react";
import { useSidebarStore } from "@/store/sidebar";
import { AppRoutes } from "@/constants/routes";

export function Sidebar() {
  const { isOpen, toggle } = useSidebarStore();

  const menu = [
    { label: "Início", icon: Home, href: AppRoutes.HOME },
    { label: "Cléro", icon: Church, href: AppRoutes.CLERGY },
  ];

  return (
    <aside
      className={cn(
        "bg-muted h-full flex flex-col justify-between transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div>
        <div className="p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="text-primary"
          >
            <Menu />
          </Button>
        </div>
        <nav className="space-y-2 px-2">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-2 rounded hover:bg-accent transition"
            >
              <item.icon className="w-5 h-5" />
              {isOpen && <span className="text-sm">{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-2 px-2 pb-4">
        <a
          href="/ajuda"
          className="flex items-center gap-3 p-2 hover:bg-accent rounded"
        >
          <HelpCircle className="w-5 h-5" />
          {isOpen && <span>Ajuda</span>}
        </a>
        <button className="flex items-center gap-3 p-2 hover:bg-destructive/10 text-destructive rounded">
          <LogOut className="w-5 h-5" />
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
