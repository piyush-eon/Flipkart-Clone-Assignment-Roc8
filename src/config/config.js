export const filterProducts = (allProducts, sortValue, filterValues) => {
  let sortedProducts = allProducts;

  if (sortValue) {
    switch (sortValue) {
      //   case 0:
      //     sortedProducts = allProducts.sort((a, b) => b.ratings - a.ratings);
      //     break;
      case -1:
        sortedProducts = allProducts.sort((a, b) => a.price - b.price);
        break;
      case 1:
        sortedProducts = allProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  }

  let filteredProducts = sortedProducts;

  if (filterValues?.brand.length) {
    filteredProducts = sortedProducts.filter((prod) =>
      filterValues.brand.includes(prod.brand)
    );
  }
  if (filterValues?.size.length) {
    filteredProducts = filteredProducts.filter((prod) =>
      filterValues.size.map((f) => prod.size.includes(f)).includes(true)
        ? true
        : false
    );
  }
  if (filterValues?.idealFor.length) {
    filteredProducts = filteredProducts.filter((prod) =>
      filterValues.idealFor.includes(prod.idealFor)
    );
  }

  return filteredProducts;
};

export const addFilter = (filterValues, brand, category) => {
  let filterprod = filterValues;

  const { checked, value } = brand;

  if (checked) filterprod[category] = [...filterprod[category], value];
  else filterprod[category] = filterprod[category].filter((br) => br !== value);

  console.log(filterprod);
  return filterprod;
};
