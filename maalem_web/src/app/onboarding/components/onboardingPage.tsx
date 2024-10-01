import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/ui/icons";
import JoinWaitlistButton from "./ui/joinWaitList";
import Footer from "./ui/onboarding-footer";

export default function OnboardingPage() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Service Request",
      href: "/docs/components/service-request-form",
      description:
        "A form where users can input details about the services they need and request a professional.",
    },
    {
      title: "Booking Modal",
      href: "/docs/components/booking-confirmation-modal",
      description:
        "A modal that confirms the user’s booking of a professional, showing details like time, price, and professional info.",
    },
    {
      title: "Professional Profile",
      href: "/docs/components/professional-profile-card",
      description:
        "Displays key information about a professional, including their name, skills, ratings, and availability.",
    },
    {
      title: "Review and Rating",
      href: "/docs/components/review-rating",
      description:
        "Allows users to leave a rating and review after a service has been completed.",
    },
    {
      title: "Service Categories",
      href: "/docs/components/service-categories",
      description:
        "A tabbed interface that allows users to browse various categories of services offered, such as plumbing, electrical, carpentry, etc.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <NavigationMenu className="bg-black px-2 py-1 rounded-full mt-7">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex flex-row gap-2 justify-center items-center">
                <div className="h-[8px] w-[8px] bg-phoenix rounded-full"></div>
                <div>Features</div>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Icons.logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Kufino
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Kufino is a platform connecting users with professional
                        workers, ensuring tasks are completed efficiently and
                        securely.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Workers">
                  Learn about the guidelines and expectations every professional
                  must follow to ensure high-quality service.
                </ListItem>
                <ListItem href="/docs/installation" title="Clients">
                  Explore how clients can easily request and manage services
                  through our platform.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Back Office"
                >
                  Our back-office team verifies worker credentials, ensuring
                  trust and professionalism.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="opacity-70">About Us</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="opacity-70">Support</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link href="/login">
                  <span className="text-phoenix">Start Free</span>
                </Link>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-col justify-center items-center h-[75rem] w-full">
        <JoinWaitlistButton />
        <div>
          <div className="flex flex-col justify-center items-center text-dobby text-[9rem] font-black space-y-[-2rem] tracking-tighter leading-[1.1]">
            <div>FIX IT NOW</div>
            <div>EASILY & SPEEDILY!</div>
          </div>
          <div className="text-dobby text-center font-regular text-[1.3rem]">
            Help you get connected with the{" "}
            <span className="font-semibold bg-phoenix opacity-80 p-1 rounded-lg">
              best workers
            </span>
            .
          </div>
          <div></div>
          <div className="h-[30rem] w-[77rem] bg-sparky rounded-xl mt-[4rem] relative">
            <Image
              src="/assets/backgrounds/morocco_1.jpeg"
              alt="Image"
              className={`rounded-xl object-cover transition-opacity duration-500`}
              fill
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
