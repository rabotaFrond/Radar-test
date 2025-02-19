export const renderImage = (images: string[]) => {
    if (images && images.length > 0) {
      return (
        <img
         src={`https://89.191.225.217/${images[0]}`}
          alt="product"
          style={{ width: "100px", height: "auto" }}
        />
      );
    }
    return "Нет изображения";
  };
