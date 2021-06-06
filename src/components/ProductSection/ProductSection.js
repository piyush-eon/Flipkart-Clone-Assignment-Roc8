import SingleCard from "../SingleCard/SingleCard";
import "./ProductSection.css";
import { products, sortBy } from "../../data/products";
import { useEffect } from "react";
import { filterProducts } from "../../config/config";

console.log(products);

const ProductSection = ({
  filterValues,
  setProducts,
  allProducts,
  sortValue,
  setsortValue,
}) => {
  useEffect(() => {
    console.log("filterValues");
    setProducts(filterProducts(products, sortValue, filterValues));

    // eslint-disable-next-line
  }, [sortValue, filterValues]);

  return (
    <div className="productcontainer">
      <span className="productcontainer__title px-3">
        Clothing and Accessories
      </span>
      <div className="productcontainer__sortby">
        <span style={{ fontWeight: 500 }}>Sort By </span>
        {sortBy.map((s) => (
          <span
            key={s.id}
            style={{
              margin: 5,
              padding: 5,
              color: sortValue === s.type && "#2874f0",
              borderBottom: sortValue === s.type && "3px solid #2874f0",
              fontWeight: sortValue === s.type && 500,
              cursor: "pointer",
            }}
            onClick={() => {
              setsortValue(s.type);
              filterProducts(allProducts, s.type);
            }}
          >
            {s.name}
          </span>
        ))}
      </div>
      <div className="productcontainer__cards">
        {allProducts?.map((product) => (
          <SingleCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
