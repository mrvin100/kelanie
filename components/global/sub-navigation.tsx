"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const jewelryCategories = [
  {
    title: "Gifts",
    href: "/gifts",
    description: "Curated selections for every occasion and recipient.",
    subitems: [
      { title: "Birthday Gifts", href: "/gifts/birthday" },
      { title: "Anniversary Presents", href: "/gifts/anniversary" },
      { title: "Corporate Gifts", href: "/gifts/corporate" },
    ],
  },
  {
    title: "Jewelry",
    href: "/jewelry",
    description: "Timeless pieces that complement every style.",
    subitems: [
      { title: "Necklaces", href: "/jewelry/necklaces" },
      { title: "Earrings", href: "/jewelry/earrings" },
      { title: "Bracelets", href: "/jewelry/bracelets" },
      { title: "Rings", href: "/jewelry/rings" },
    ],
  },
  {
    title: "High Jewelry",
    href: "/high-jewelry",
    description: "Exquisite, one-of-a-kind pieces for the discerning collector.",
    subitems: [
      { title: "Diamond Collections", href: "/high-jewelry/diamond" },
      { title: "Precious Gemstones", href: "/high-jewelry/gemstones" },
      { title: "Bespoke Creations", href: "/high-jewelry/bespoke" },
    ],
  },
  {
    title: "Love & Engagement",
    href: "/love-and-engagement",
    description: "Celebrate your love with our stunning engagement and wedding collections.",
    subitems: [
      { title: "Engagement Rings", href: "/love-and-engagement/engagement-rings" },
      { title: "Wedding Bands", href: "/love-and-engagement/wedding-bands" },
      { title: "Bridal Sets", href: "/love-and-engagement/bridal-sets" },
    ],
  },
  {
    title: "Fine Watches",
    href: "/watches",
    description: "Precision timepieces that blend artistry with functionality.",
    subitems: [
      { title: "Luxury Watches", href: "/watches/luxury" },
      { title: "Sports Watches", href: "/watches/sports" },
      { title: "Dress Watches", href: "/watches/dress" },
    ],
  },
  {
    title: "Home",
    href: "/home",
    description: "Elevate your living spaces with our curated home collections.",
    subitems: [
      { title: "Decor", href: "/home/decor" },
      { title: "Tableware", href: "/home/tableware" },
      { title: "Art Objects", href: "/home/art-objects" },
    ],
  },
  {
    title: "Accessories",
    href: "/accessories",
    description: "Complete your look with our range of sophisticated accessories.",
    subitems: [
      { title: "Handbags", href: "/accessories/handbags" },
      { title: "Scarves", href: "/accessories/scarves" },
      { title: "Sunglasses", href: "/accessories/sunglasses" },
    ],
  },
  {
    title: "Stories",
    href: "/stories",
    description: "Discover the inspiration and craftsmanship behind our collections.",
    subitems: [
      { title: "Brand Heritage", href: "/stories/heritage" },
      { title: "Artisan Spotlight", href: "/stories/artisans" },
      { title: "Design Inspiration", href: "/stories/inspiration" },
    ],
  },
];

export const SubNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {jewelryCategories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={category.href}
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {category.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {category.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {category.subitems.map((item) => (
                  <ListItem key={item.title} href={item.href} title={item.title}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

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
            className
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