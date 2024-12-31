import { FC } from "react";
import { AppContainer } from "../global";
import { TypographyH1, TypographyP } from "../ui/typographies";
import { Button } from "../ui/button";
import Image from "next/image";

export const HomeBanner: FC = () => {
  return (
    <section>
      <AppContainer className="relative max-w-full grid md:grid-cols-2 lg:grid-cols-3 h-[85vh]">
        <div className="absolute top-0 bottom-0 right-0 left-0 md:static grid items-center justify-cente backdrop-blur-sm hover:backdrop-blur-none transition-transform text-primary-foreground md:text-secondary-foreground">
          <div className="text-center space-y-4 p-4 md:p-0">
            <TypographyH1>Iconic Gifts since 1837</TypographyH1>
            <TypographyP className="text-sm md:max-w-sm mx-auto">
              Celebrate every facet of love this holiday with iconic gifts from
              Tiffany & Co.
            </TypographyP>
            <Button variant={"outline"} className="font-light text-base p-4 text-secondary-foreground">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="bg-red-50">
          <Image
            src={"/home_banner_image1.jpeg"}
            alt="home banner image"
            height={1000}
            width={1000}
            className="object-cover h-full"
          />
        </div>
        <div className="bg-muted/5 hidden lg:block">
          <Image
            src={"/home_banner_image4.jpeg"}
            alt="home banner image"
            height={1000}
            width={1000}
            className="object-cover h-full"
          />
        </div>
      </AppContainer>
    </section>
  );
};
