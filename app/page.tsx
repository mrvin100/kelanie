import { AppContainer, Spacer } from "@/components/global";
import { HomeExperience } from "@/components/home";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <AppContainer>
        <div className="border h-96 p-4 grid place-content-center">
          <Button>Hello world</Button>
        </div>
      </AppContainer>
      <HomeExperience />
      <Spacer extraSmall />
    </>
  );
}
