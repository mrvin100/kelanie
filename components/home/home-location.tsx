import { ChevronRight } from "lucide-react";
import { AppContainer } from "../global";
import { Button } from "../ui/button";
import { TypographyH2, TypographyP } from "../ui/typographies";
import Image from "next/image";

export const HomeLocation = () => {
  return (
    <section>
      <AppContainer className="text-center grid md:grid-cols-3 items-center gap-4 max-w-full">
        {/* <div className="md:col-span-2 border"> */}
        <Image
          src={"/home_location_image.jpg"}
          alt="Office loaction image"
          height={1000}
          width={1000}
          className="w-full h-full md:col-span-2 block"
        />
        {/* </div> */}
        <div className="md:ml-4 col-span-1">
          <TypographyH2>Holiday Wonder Awaits at The Landmark</TypographyH2>
          <TypographyP className="text-sm md:max-w-xs mx-auto">
            In celebration of the festive season, The Landmark has been
            transformed with captivating installations. Experience a glittering
            façade that only Tiffany could imagine, the House’s famed holiday
            windows and Jean Schlumberger’s majestic Bird on a Rock perched atop
            the building. <br />
            Photograph by Ricky Zehavi
          </TypographyP>
          <Button variant={"link"}>
            Plan Your Visit&nbsp;
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </AppContainer>
    </section>
  );
};
