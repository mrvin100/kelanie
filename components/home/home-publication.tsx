import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { TypographyH2, TypographyP } from "../ui/typographies";
import { AppContainer } from "../global";
import { VideoPlayer } from "./video-player";

export const HomePublication = () => {
  return (
    <section>
      <AppContainer className="text-center grid md:grid-cols-3 items-center gap-4 max-w-full">
        <div className="order-last md:-order-none md:ml-4 p-4 md:p-0">
          <TypographyH2>A Kelanie Holiday Awaits</TypographyH2>
          <TypographyP className="text-sm md:max-w-xs mx-auto">
            This season, discover a place where every act of love is celebrated.
          </TypographyP>
          <Button variant={"link"}>
            Eplore the Story&nbsp;
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <div className="md:col-span-2">
          <VideoPlayer />
        </div>
      </AppContainer>
    </section>
  );
};

