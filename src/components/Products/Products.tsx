import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { renderImage } from "../utils/utils";
import useProducts from "../../hooks/useProducts";
import "./Products.scss";

const Products: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { products, countPage, loading, error } = useProducts(page);

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    if (bottom && !loading && countPage !== page) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, page, countPage]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Название продукта", flex: 1 },
    {
      field: "price",
      headerName: "Цена",
      type: "number",
      flex: 1,
      sortable: true,
    },
    { field: "stock", headerName: "В наличии", type: "number", flex: 1 },
    { field: "brand", headerName: "Бренд", flex: 1 },
    { field: "rating", headerName: "Рейтинг", type: "number", flex: 1 },
    { field: "reviews_count", headerName: "Отзывы", type: "number", flex: 1 },
    { field: "barcode", headerName: "Штрихкод", flex: 1 },
    {
      field: "images",
      headerName: "Изображение",
      flex: 1,
      renderCell: (params) => renderImage(params.value),
    },
  ];

  if (loading && products.length === 0) {
    return (
      <CircularProgress
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  return (
    <div className="wraper">
      <div className="product-card">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <DataGrid
          rows={products}
          columns={columns}
          disableRowSelectionOnClick
          sortingOrder={["asc", "desc"]}
          getRowId={(row) => row.id}
          hideFooterPagination
          getRowHeight={() => 120}
        />
        {loading && (
          <CircularProgress
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
