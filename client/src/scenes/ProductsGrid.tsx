import mockProductData from "../mockProductData";
import ProductCard from "../components/ProductCard";

const ProductsGrid = () => {
  const rowCount = Math.ceil(mockProductData.length / 4);
  return (
    <div
      className={`w-10/12 grid grid-cols-4 grid-rows-${rowCount} items-center gap-6 bg-color-alternative-theme1 my-8`}
    >
      {mockProductData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
