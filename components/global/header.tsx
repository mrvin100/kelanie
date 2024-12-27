import { AppContainer } from "./app-container";

export const Header = () => {
  return (
    <header className="border">
      <AppContainer className="flex justify-between gap-3 items-center border">
        <div>Tool Bar Left</div>
        <div>KeLANIE</div>
        <div>Toll bar Right</div>
      </AppContainer>
    </header>
  );
};
