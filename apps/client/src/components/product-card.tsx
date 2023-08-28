import { PlusSquare } from "lucide-react";
import { HtmlHTMLAttributes, ReactElement } from "react";
import { Skeleton } from "./skeleton";

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
      loading="lazy"
      className="h-44 w-full overflow-hidden rounded-2xl bg-slate-200 object-cover"
      src={imageUrl}
      alt="product image"
    />
  );
};

export const ProductCardButton = ({
  ...rest
}: HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest}>
      <PlusSquare className="h-6 w-6 text-rose-400 hover:text-rose-500" />
    </button>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-44 w-full rounded-2xl " />

      <div className="mt-4 space-y-4 px-1.5">
        <div className="space-y-1">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-3 w-24" />
        </div>
        <div className="flex">
          <Skeleton className="h-3 w-14" />
        </div>
      </div>
    </div>
  );
};

ProductCard.Skeleton = ProductCardSkeleton;
ProductCard.Button = ProductCardButton;
ProductCard.Image = ProductCardImage;
