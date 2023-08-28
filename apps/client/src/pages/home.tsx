import { ProductsDisplay } from "../components/products-section";

export const HomePage = () => {
  return (
    <div className="space-y-14">
      <ProductsDisplay
        section="VALUE_DEALS"
        heading={<ProductsDisplay.Heading heading="Value Deals" />}
      />

      <ProductsDisplay
        section="KID_FRIENDLY"
        heading={<ProductsDisplay.Heading heading="Kids Friendly" />}
      />

      <ProductsDisplay
        section="MILLET_ALTERNATIVES"
        heading={<ProductsDisplay.Heading heading="Millet Alternatives" />}
      />

      <ProductsDisplay
        section="SPICY_CUISINE"
        heading={<ProductsDisplay.Heading heading="Spicy cuisine" />}
      />

      <ProductsDisplay
        section="REGIONAL_FAVORITES"
        heading={<ProductsDisplay.Heading heading="Regional Favorites" />}
      />

      <ProductsDisplay
        section="FARM_TO_TABLE"
        heading={<ProductsDisplay.Heading heading="Farm To Table" />}
      />
    </div>
  );
};
