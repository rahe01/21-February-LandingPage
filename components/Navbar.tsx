"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  className?: string;
}

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  { title: "History", url: "/history" },
  { title: "Language Heroes", url: "/heroes" },
  { title: "Gallery", url: "/gallery" },
  { title: "Events", url: "/events" },
];

export default function LanguageDayNavbar({ className }: NavbarProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <section className={cn("py-3 shadow-md bg-red-600", className)}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bangladesh.png"
            alt="Bangladesh Flag"
            width={40}
            height={40}
            priority
          />
          <span className="font-extrabold text-white text-2xl md:text-3xl tracking-wide">
            Bangla Heritage
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-white">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {menu.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.url}
                      className="px-4 py-2 text-2xl md:text-2.5xl font-semibold hover:text-yellow-300 transition rounded-md"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Explore Button */}
          <Link href="/gallery">
            <Button className="bg-green-500 hover:bg-green-600 text-white text-md md:text-lg h-12 flex items-center justify-center">
              Explore
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="text-black border-red-200 bg-green-500 hover:bg-green-800"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-lg font-bold">
                  <Image
                    src="/bangladesh.png"
                    alt="flag"
                    width={30}
                    height={30}
                  />
                  Bangla Heritage
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-3 mt-6 text-lg">
                {menu.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="py-3 px-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-md transition"
                    onClick={() => setSheetOpen(false)} // Auto-close on click
                  >
                    {item.title}
                  </Link>
                ))}

                <Link href="/gallery" onClick={() => setSheetOpen(false)}>
                  <Button className="bg-green-500 hover:bg-green-600 mt-4 text-white text-md w-full">
                    Explore
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
