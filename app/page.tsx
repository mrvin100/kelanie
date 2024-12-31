import { AppContainer, Spacer } from "@/components/global";
import {
  HomeCategories,
  HomeExperience,
  HomeGift,
  HomeLocation,
  HomePublication,
} from "@/components/home";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <AppContainer>
        <div className="border h-96 p-4 grid place-content-center">
          <Button>Hello world</Button>
        </div>
      </AppContainer>
      <HomeCategories />
      <Spacer extraSmall />
      <HomeLocation />
      <Spacer extraSmall />
      <HomePublication />
      <Spacer extraSmall />
      <HomeGift />
      <HomeExperience />
      <Spacer extraSmall />
    </main>
  );
}
