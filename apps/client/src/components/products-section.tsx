import { ReactElement } from "react";

import { useFetchProducts } from "../hooks/use-fetch-products";
import { ProductCard } from "./product-card";
import { Swiper, SwiperSlide } from "./swiper";

interface IProductsSection {
  section:
    | "VALUE_DEALS"
    | "KID_FRIENDLY"
    | "MILLET_ALTERNATIVES"
    | "SPICY_CUISINE"
    | "REGIONAL_FAVORITES"
    | "FARM_TO_TABLE";

  heading: ReactElement;
}

export const ProductsDisplay = ({ section, heading }: IProductsSection) => {
  const { products, isLoading, error, isError } = useFetchProducts({
    section: section,
  });

  if (isLoading) {
    return (
      <div className="space-y-8">
        {heading}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard.Skeleton />
          <ProductCard.Skeleton />
          <ProductCard.Skeleton />
          <ProductCard.Skeleton />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>error</div>;
  }

  if (products) {
    return (
      <div className="space-y-8 overflow-hidden">
        {heading}

        {isError && <div>{error}</div>}

        {products.length > 0 ? (
          <Swiper
            breakpoints={{
              50: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 4,
              },
            }}
            on={{
              slideChange: () => console.log("slide changed"),
            }}
            loop
            spaceBetween={32}
          >
            {products.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <ProductCard
                    image={
                      <ProductCard.Image imageUrl={product.product_images[0]} />
                    }
                    action={<ProductCard.Button />}
                    name={product.product_name}
                    oneLiner={product.one_liner}
                    price={product.price}
                    quantity={product.quantity}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div>No products found</div>
        )}
      </div>
    );
  }

  return null;
};

export const ProductsDisplayHeading = ({ heading }: { heading: string }) => {
  return <h2 className="text-2xl font-medium">{heading}</h2>;
};

ProductsDisplay.Heading = ProductsDisplayHeading;
