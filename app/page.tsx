import { AppContainer } from "@/components/global/app-container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <AppContainer>
        <div className="border">
          <Button>Hello world</Button>
        </div>
      </AppContainer>
    </>
  );
}
