"use client";

import { Flag, BookOpen, Image, CalendarDays, Users, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
}

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "History",
    url: "#",
    items: [
      {
        title: "Language Movement 1952",
        description: "The historic movement for Bangla language rights",
        icon: <BookOpen className="size-5" />,
        url: "#history",
      },
      {
        title: "Background",
        description: "Events that led to the language movement",
        icon: <Flag className="size-5" />,
        url: "#background",
      },
    ],
  },
  {
    title: "Language Heroes",
    url: "#",
    items: [
      {
        title: "Salam",
        description: "Language martyr of 1952",
        icon: <Users className="size-5" />,
        url: "#salam",
      },
      {
        title: "Barkat",
        description: "Student of Dhaka University",
        icon: <Users className="size-5" />,
        url: "#barkat",
      },
      {
        title: "Rafiq",
        description: "One of the brave language martyrs",
        icon: <Users className="size-5" />,
        url: "#rafiq",
      },
      {
        title: "Jabbar",
        description: "Martyr of the language movement",
        icon: <Users className="size-5" />,
        url: "#jabbar",
      },
    ],
  },
  {
    title: "Gallery",
    url: "#gallery",
    items: [
      {
        title: "Shaheed Minar",
        description: "Symbol of language movement",
        icon: <Image className="size-5" />,
        url: "#shaheed-minar",
      },
      {
        title: "Historic Photos",
        description: "Images from 1952 movement",
        icon: <Image className="size-5" />,
        url: "#photos",
      },
    ],
  },
  {
    title: "Events",
    url: "#",
    items: [
      {
        title: "21 February Programs",
        description: "Annual programs and tributes",
        icon: <CalendarDays className="size-5" />,
        url: "#events",
      },
    ],
  },
];

export default function LanguageDayNavbar({ className }: NavbarProps) {
  return (
    <section className={cn("py-4 border-b bg-red-300", className)}>
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/bangladesh.png"
            alt="Bangladesh Flag"
            className="h-8 w-auto"
          />
          <span className="font-bold text-lg">Language Day</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 ">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderDesktopMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-red-600 hover:bg-red-700">Explore</Button>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src="/bangladesh.png"
                    alt="Bangladesh Flag"
                    className="h-8 w-8"
                  />
                  Language Day
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-2"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <Button className="bg-red-600 hover:bg-red-700 mt-2">
                  Explore
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}

const renderDesktopMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((sub) => (
            <NavigationMenuLink
              key={sub.title}
              href={sub.url}
              className="flex gap-3 p-3 w-80 hover:bg-muted rounded-md"
            >
              {sub.icon}
              <div>
                <div className="font-semibold text-sm">{sub.title}</div>
                {sub.description && (
                  <p className="text-xs text-muted-foreground">
                    {sub.description}
                  </p>
                )}
              </div>
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b-0 px-6"
      >
        <AccordionTrigger className="py-2 font-semibold">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {item.items.map((sub) => (
            <a
              key={sub.title}
              href={sub.url}
              className="flex gap-3 p-2 rounded hover:bg-muted"
            >
              {sub.icon}
              <div>
                <div className="font-semibold text-sm">{sub.title}</div>
                {sub.description && (
                  <p className="text-xs text-muted-foreground">
                    {sub.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="py-2 font-semibold px-6">
      {item.title}
    </a>
  );
};
