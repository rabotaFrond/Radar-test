import { useState, useEffect } from "react";
import { get_products } from "../components/Api/Api";

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  discount_price: number;
  stock: number;
  category: string;
  created_at: string;
  images: string[];
  seller_id: number;
  barcode: string;
  rating: number;
  brand: string | null;
  reviews_count: number;
}

const useProducts = (page: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [countPage, setCountPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await get_products(page);
        setCountPage(data.pages);
        setProducts((prevProducts) =>
          prevProducts ? [...prevProducts, ...data.products] : data.products
        );
      } catch (error) {
        setError("Ошибка загрузки данных");
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]);

  return { products, countPage, loading, error };
};

export default useProducts;
