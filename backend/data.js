import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Asif",
      email: "asif@lged.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Ashique",
      email: "ashique@lged.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Classic Fit Board Wool Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "This is very high quality product",
    },
    {
      name: "Adidas Classic Fit Board Wool Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 15,
      brand: "Adidas",
      rating: 4.3,
      numReviews: 11,
      description: "This is very high quality product Adidas Classic ",
    },
    {
      name: "Lacosta Classic Fit Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 140,
      countInStock: 0,
      brand: "Lacosta",
      rating: 4.8,
      numReviews: 17,
      description: "This is very high quality product Lacosta",
    },
    {
      name: "Nike Fit Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 87,
      countInStock: 25,
      brand: "Nike",
      rating: 4.7,
      numReviews: 15,
      description: "This is very high quality product Nike Fit Pant",
    },
    {
      name: "Adidas Fit Board Wool Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 90,
      countInStock: 35,
      brand: "Adidas",
      rating: 4.9,
      numReviews: 10,
      description: "This is very high quality product Adidas",
    },
    {
      name: "Puma Classic Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 99,
      countInStock: 0,
      brand: "Puma",
      rating: 4.8,
      numReviews: 18,
      description: "This is very high quality product Puma",
    },
  ],
};

export default data;
