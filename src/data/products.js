import faker from "faker";
faker.seed(100);
export const products = [...Array(10)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  brand: faker.lorem.word(),
  //   inStock: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  assured: faker.datatype.boolean(),
  offer: faker.random.arrayElement(["50%", "70%", "69%", "65%"]),
  size: faker.random.arrayElement([
    ["S", "M", "L", "XL"],
    ["S", "M", "L"],
    ["M", "L", "XL"],
    ["L", "XXL"],
    ["S", "M", "XL"],
    ["M", "L", "XXL"],
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior",
  ]),
}));

export const sortBy = [
  // {
  //   id: 0,
  //   name: "Popularity",
  //   type: 0,
  // },
  {
    id: 1,
    name: "Price -- Low to High",
    type: -1,
  },
  {
    id: 2,
    name: "Price -- High to Low",
    type: 1,
  },
];
