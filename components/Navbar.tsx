"use client";

import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  const features = [
    {
      title: "Real-time Stock Tracking",
      description: "Know what ingredients you have, and what’s running low.",
      href: "#",
    },
    {
      title: "Batch Logging Made Easy",
      description:
        "Record each production run in seconds; auto-calculate yields and costs.",
      href: "#",
    },
    {
      title: "Profit Dashboards",
      description: "See your most and least profitable products at a glance.",
      href: "#",
    },
    {
      title: "Exportable Reports",
      description: "Download CSV or PDF summaries for owners or suppliers.",
      href: "#",
    },
  ];

  return (
    <section className="py-4 w-full flex justify-center fixed top-0 z-50 bg-background px-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-display tracking-tighter">
              Batchwise
            </span>
          </a>
          <NavigationMenu className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-text">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-4">
            <ModeToggle />
            <div className="hidden items-center gap-4 lg:flex">
              <Button variant="outline">Sign in</Button>
              <Button>Get Started Free</Button>
            </div>
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="max-h-screen overflow-auto"
              >
                <SheetHeader>
                  <SheetTitle>
                    <a
                      href="https://www.shadcnblocks.com"
                      className="flex items-center gap-2"
                    >
                      <span className="text-lg font-display tracking-tighter">
                        Batchwise
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4">
                  <Accordion type="single" collapsible className="mt-4 mb-2">
                    <AccordionItem value="solutions" className="border-none">
                      <AccordionTrigger className="text-base font-text hover:no-underline">
                        Features
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2">
                          {features.map((feature, index) => (
                            <a
                              href={feature.href}
                              key={index}
                              className="rounded-md p-3 transition-colors hover:bg-muted/70"
                            >
                              <div key={feature.title}>
                                <p className="mb-1 font-semibold text-foreground">
                                  {feature.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex flex-col gap-6">
                    <a href="#" className="font-medium">
                      Contact
                    </a>
                    <a href="#" className="font-medium">
                      Pricing
                    </a>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <Button variant="outline">Sign in</Button>
                    <Button>Get Started Free</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
