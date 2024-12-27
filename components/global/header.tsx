import { AppContainer } from "./app-container";
import { SubNavigation } from "./sub-navigation";

// interface NavbarItem {
//   title: string;
// }

// const navbarItems: NavbarItem[] = [
//   { title: "Gifts" },
//   { title: "Jewelry" },
//   { title: "High Jewelry" },
//   { title: "Love & Engagement" },
//   { title: "Fine Watches" },
//   { title: "Home" },
//   { title: "Accessories" },
//   { title: "Stories" },
// ];

export const Header = () => {
  return (
    <header className="border">
      <AppContainer className="border">
        <div className="flex justify-between gap-3 items-center ">
          <div>Tool Bar Left</div>
          <div>KeLANIE</div>
          <div>Toll bar Right</div>
        </div>
        <SubNavigation />
      </AppContainer>
    </header>
  );
};
