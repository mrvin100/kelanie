import { FC } from "react";
import { AppContainer } from "./app-container";
import { TypographyH3, TypographyH4, TypographyP } from "../ui/typographies";
import Link from "next/link";
import { Spacer } from "./spacer";
import { FooterForm } from "./footer-form";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";
enum FooterLinkGroup {
  CLIENT_CARE = "Client Care",
  OUR_COMPANY = "Our Company",
  RELATED_KELANIE_SITES = "Related Kelanie Sites",
}
interface FooterLink {
  link: string;
  text: string;
  group: FooterLinkGroup;
}
const footerLinks: FooterLink[] = [
  {
    text: "Contact Us",
    link: "/contact-us",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Track Your Order",
    link: "/track-your-order",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Product Care & Repair",
    link: "/product-care-&-repair",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Book an Appointment",
    link: "/book-an-appointment",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Frequently Asked Questions",
    link: "/frequently-asked-questions",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Shipping & Returns",
    link: "/shipping-&-returns",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Kelanie Select Financing",
    link: "/kelanie-select-financing",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Gift Cards",
    link: "/gift-cards",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Website Accessibility",
    link: "/website-accessibility",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "World of Kelanie",
    link: "/world-of-kelanie",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Sustainability",
    link: "/sustainability",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "California Supply Chains Act",
    link: "/california-supply-chains-act",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "California Privacy",
    link: "/california-privacy",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Kelanie Careers",
    link: "/kelanie-careers",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Privacy and Other Website Policies",
    link: "/privacy-and-other-website-policies",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Transparency in Coverage",
    link: "/transparency-in-coverage",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Do Not Sell or Share My Personal Information",
    link: "/do-not-sell-or-share-my-personal-information",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Opt-Out of Targeted Advertising",
    link: "/opt-out-of-targeted-advertising",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Wedding & Gift Registry",
    link: "/wedding-&-gift-registry",
    group: FooterLinkGroup.RELATED_KELANIE_SITES,
  },
  {
    text: "Business Accounts",
    link: "/business-accounts",
    group: FooterLinkGroup.RELATED_KELANIE_SITES,
  },
  {
    text: "Kelanie for the Press",
    link: "/kelanie-for-the-press",
    group: FooterLinkGroup.RELATED_KELANIE_SITES,
  },
  {
    text: "The Kelanie & Co. Foundation",
    link: "/the-kelanie-&-co.-foundation",
    group: FooterLinkGroup.RELATED_KELANIE_SITES,
  },
  {
    text: "Kelanie Alertline",
    link: "/kelanie-alertline",
    group: FooterLinkGroup.RELATED_KELANIE_SITES,
  },
  {
    text: "Site Index",
    link: "/site-index",
    group: FooterLinkGroup.RELATED_KELANIE_SITES,
  },
];

export const Footer: FC = () => {
  return (
    <section>
      <Button variant={"secondary"} className="w-full border-primary bg-stone-50" asChild>
        <Link href={"/"}>HOME</Link>
      </Button>
      <AppContainer className="max-w-full px-8 sm:px-4 lg:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center">
          <div>
            <TypographyH3 className="my-4">
              {FooterLinkGroup.CLIENT_CARE}
            </TypographyH3>
            <div className="flex flex-col gap-2">
              {footerLinks
                .filter((link) => link.group === FooterLinkGroup.CLIENT_CARE)
                .map((element, i) => (
                  <Link
                    key={i}
                    href={element.link}
                    className="hover:underline inline-block text-xs capitalize leading-5"
                  >
                    {element.text}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <TypographyH3 className="my-4">
              {FooterLinkGroup.OUR_COMPANY}
            </TypographyH3>
            <div className="flex flex-col gap-2">
              {footerLinks
                .filter((link) => link.group === FooterLinkGroup.OUR_COMPANY)
                .map((element, i) => (
                  <Link
                    key={i}
                    href={element.link}
                    className="hover:underline inline-block text-xs capitalize leading-5"
                  >
                    {element.text}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <TypographyH3 className="my-4">
              {FooterLinkGroup.RELATED_KELANIE_SITES}
            </TypographyH3>
            <div className="flex flex-col gap-2">
              {footerLinks
                .filter(
                  (link) => link.group === FooterLinkGroup.RELATED_KELANIE_SITES
                )
                .map((element, i) => (
                  <Link
                    key={i}
                    href={element.link}
                    className="hover:underline inline-block text-xs capitalize leading-5"
                  >
                    {element.text}
                  </Link>
                ))}
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div>
            <TypographyH3 className="my-4">Latest from Kelanie</TypographyH3>
            <TypographyP>
              Be the first to know about exciting new designs, special events,
              store openings and much more.
            </TypographyP>
            <Spacer extraSmall />
            <FooterForm />
            <Spacer extraSmall />
            <div className="space-x-3 space-y-3">
              <Button variant={"secondary"} size={"icon"}>
                <Instagram className="inline-block w-6 h-6" />
              </Button>
              <Button variant={"secondary"} size={"icon"}>
                <Facebook className="inline-block w-6 h-6" />
              </Button>
              <Button variant={"secondary"} size={"icon"}>
                <Linkedin className="inline-block w-6 h-6" />
              </Button>
              <Button variant={"secondary"} size={"icon"}>
                <Twitter className="inline-block w-6 h-6" />
              </Button>
              <Button variant={"secondary"} size={"icon"}>
                <Youtube className="inline-block w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </AppContainer>
      <Spacer extraSmall />
      <div className="text-center mt-10 lg:mt-0">
        <TypographyH4>© K&CO. 2024</TypographyH4>
      </div>
      <Spacer extraSmall />
    </section>
  );
};
