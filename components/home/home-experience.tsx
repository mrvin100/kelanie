import {
  BellRing,
  Calendar,
  ChevronRight,
  Gift,
  LucideIcon,
  LucideShoppingBag,
} from "lucide-react";
import { AppContainer, Spacer } from "../global";
import { TypographyH2, TypographyH3, TypographyP } from "../ui/typographies";
import { Button } from "../ui/button";
import Link from "next/link";
import { FC } from "react";

interface ExperienceType {
  icon: LucideIcon;
  title: string;
  description: string;
  link: { text: string; href: string };
}

const experiences: ExperienceType[] = [
  {
    icon: LucideShoppingBag,
    title: "Complementary Shipping & Returns",
    description:
      "We offer complementary shipping and returns on all Kelanie orders.",
    link: { text: "Learn More", href: "#" },
  },
  {
    icon: BellRing,
    title: "Kelanie At Your Service",
    description: "Our client care experts are always here to help.",
    link: { text: "Contact Us", href: "#" },
  },
  {
    icon: Calendar,
    title: "Book An Appointment",
    description: "We are happy to help with in-store or virtual appointments.",
    link: { text: "Book Now", href: "#" },
  },
  {
    icon: Gift,
    title: "The Iconic Blue Box",
    description: "Your Kelanie Purchase comes wrapped in a Blue Box packaging.",
    link: { text: "Explore All Gifts", href: "#" },
  },
];

export const HomeExperience:FC = () => {
  return (
    <section className="bg-stone-50 p-4 my-4">
      <AppContainer className="max-w-full">
        <Spacer extraSmall />
        <TypographyH2 className="text-center">
          The Kelanie Experience
        </TypographyH2>
        <Spacer tooSmall />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="flex justify-center flex-col gap-4 gap-y-2"
            >
              <experience.icon className="w-8 h-8 mx-auto inline-block font-extralight" />
              <TypographyH3 className="capitalize !text-sm font-normal">
                {experience.title}
              </TypographyH3>
              <TypographyP className="mx-auto max-w-xs">{experience.description}</TypographyP>
              <Button variant={"link"} asChild>
                <Link href={experience.link.href}>
                  {experience.link.text}&nbsp;
                  <ChevronRight />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </section>
  );
};
