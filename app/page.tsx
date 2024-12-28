import { AppContainer, Spacer } from "@/components/global";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <AppContainer>
        <div className="border h-screen p-4 grid place-content-center">
          <Button>Hello world</Button>
        </div>
        <Spacer extraSmall />
      </AppContainer>
    </>
  );
}
