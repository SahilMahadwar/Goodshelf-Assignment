import axios from "axios";
import { useEffect, useState } from "react";
import { IApiResponse, IProduct } from "types";

export function useFetchProducts({ section }: { section: string }) {
  const [products, setProducts] = useState<IProduct[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const fetchProducts = await axios.get<IApiResponse<IProduct[]>>(
        `http://localhost:4444/api/v1/products?section_name=${section}`,
      );

      setProducts(fetchProducts.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(
        error instanceof Error ? error.message : "something bad happned",
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isError, isLoading, error };
}
