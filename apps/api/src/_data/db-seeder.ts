import { connectDB } from "../config/db";
import { ProductModel } from "../models/Product";
import { allproducts } from "./allproducts";
import { skudata } from "./skudata";

async function seedDatabase() {
  try {
    connectDB();

    await ProductModel.deleteMany({});
    console.log("Cleared existing data");

    const products = [];
    for (let i = 0; i < allproducts.length; i++) {
      if (
        allproducts[i].category_id === "070000" &&
        allproducts[i].launch_status === true
      ) {
        const choose_Section = [
          "VALUE_DEALS",
          "KID_FRIENDLY",
          "MILLET_ALTERNATIVES",
          "SPICY_CUISINE",
          "REGIONAL_FAVORITES",
          "FARM_TO_TABLE",
        ];

        const getSkuData = skudata.find((product) => {
          if (product.product_id === allproducts[i].product_id) {
            return product.sku_name;
          }
        });

        products.push({
          product_name: allproducts[i].product_name,
          one_liner: allproducts[i].product_headline,
          price: 199,
          quantity: getSkuData?.sku_name ? getSkuData?.sku_name : "250 gms",
          section_name: choose_Section[Math.floor(Math.random() * 6)],
          product_images: allproducts[i].images,
        });
      }
    }

    console.log(products);

    await ProductModel.insertMany(products);

    console.log("Inserted fake data");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();
