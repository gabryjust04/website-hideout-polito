"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Link = {
  href: string;
  label: string;
};

const links: Link[] = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/contatti", label: "Contatti" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <Image alt="Hideout Polito logo" src="/logo.jpg" width={36} height={36} priority />
          <span className="font-outfit text-lg font-semibold tracking-tight text-foreground">Hideout Polito</span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href as any}
                      className={cn(
                        navigationMenuTriggerStyle,
                        pathname === link.href && "bg-background text-foreground shadow-sm"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu>
          <Button asChild>
            <Link href="/contatti">Unisciti a noi</Link>
          </Button>
        </div>

        <div className="flex flex-1 justify-end md:hidden">
          <Button asChild variant="outline" size="sm">
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
