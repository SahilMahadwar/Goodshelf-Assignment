import { PlusSquare } from "lucide-react";
import { ReactElement } from "react";

interface IProductCard {
  name: string;
  image?: ReactElement;
  oneLiner?: string;
  price?: number;
  quantity?: string;
  action?: ReactElement;
}

export const ProductCard = ({
  image,
  name = "product name",
  oneLiner = "awesome product",
  price = 199,
  quantity = "1 kg",
  action,
}: IProductCard) => {
  return (
    <div>
      {image}
      <div className="mt-4 space-y-4 px-1.5 ">
        <div className="space-y-1">
          <h3 className="font-medium text-slate-800">{name}</h3>
          <p className="line-clamp-3 text-sm text-slate-600">{oneLiner}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-gray-800">
            ₹{price.toString()}
            <span className="font-normal text-slate-600">/ {quantity}</span>
          </p>
          {action}
        </div>
      </div>
    </div>
  );
};

export const ProductCardImage = ({
  imageUrl = "https://goodshelf-images-s3-bucket.s3.ap-south-1.amazonaws.com/product-images/060290-982.webp",
}: {
  imageUrl: string;
}) => {
  return (
    <img
      className="h-44 w-full rounded-2xl object-cover"
      src={imageUrl}
      alt="product image"
    />
  );
};

export const ProductCardButton = () => {
  return (
    <button>
      <PlusSquare className="h-6 w-6 text-rose-500" />
    </button>
  );
};

ProductCard.Button = ProductCardButton;
ProductCard.Image = ProductCardImage;
