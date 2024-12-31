import { FC } from "react";
import * as motion from "motion/react-client";
import { AppContainer, Spacer } from "../global";
import { TypographyH1, TypographyH4, TypographyP } from "../ui/typographies";
import Image from "next/image";

export const HomeCategories: FC = () => {
  const categories: CategoryCardType[] = [
    { title: "Necklares & Pendants", image: "/images/category_image1.jpg" },
    { title: "Earrings", image: "/images/category_image2.jpg" },
    { title: "Bracelets", image: "/images/category_image3.jpg" },
    { title: "rings", image: "/images/category_image4.jpg" },
    { title: "Engagement Rings", image: "/images/category_image5.jpg" },
    { title: "Home", image: "/images/category_image6.jpg" },
  ];
  return (
    <motion.section>
      <AppContainer>
        <Spacer tooSmall />
        <div className="text-center space-y-3">
          <TypographyH1>Shop by Category</TypographyH1>
          <TypographyP className="text-sm mx-auto">
            Kelanie & Co. designs feature the world’s finest diamonds and
            unparalleled craftsmanship—signatures of the House for almost two
            centuries.
          </TypographyP>
        </div>
        <Spacer extraSmall />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </AppContainer>
    </motion.section>
  );
};

interface CategoryCardType {
  image: string;
  title: string;
}

function CategoryCard({ image, title }: CategoryCardType) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      drag
      dragTransition={{ power: 0.2 }}
      whileTap={{ scale: 0.9, rotate: 3 }}
    >
      <Image src={image} alt="category image" height={400} width={400} />
      <TypographyH4 className="text-center font-normal mt-2">
        {title}
      </TypographyH4>
    </motion.div>
  );
}
