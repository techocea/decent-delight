export const navLinks = [
  {
    id: 1,
    url: "/about",
    label: "About us",
  },
  { id: 2, url: "/category/gateaux", label: "Gateaux" },
  { id: 3, url: "/category/cake_jars", label: "Cake Jars" },
  { id: 4, url: "/category/cookies", label: "Cookies" },
  { id: 5, url: "/category/brownies", label: "Brownies" },
  { id: 6, url: "/category/cupcakes", label: "Cupcakes" },
  { id: 7, url: "/category/predesigned_mini_cakes", label: "Mini Cakes" },
  { id: 8, url: "/category/predesigned_cakes", label: "Cakes" },
  { id: 9, url: "/category/sweet_table", label: "Sweet Table" },
];

export const dashboardNavLinks = [
  {
    url: "/dashboard",
    label: "Dashboard",
  },
  {
    url: "/dashboard/orders",
    label: "Orders",
  },
  {
    url: "/dashboard/products",
    label: "Products",
  },
];

export const categories = [
  {
    id: 1,
    title: "Gateaux",
    name: "gateaux",
  },
  {
    id: 2,
    title: "Cake Jars",
    name: "cake_jars",
  },
  {
    id: 3,
    title: "Cookies",
    name: "cookies",
  },
  {
    id: 4,
    title: "Brownies",
    name: "brownies",
  },
  {
    id: 5,
    title: "Cupcakes",
    name: "cupcakes",
  },
  {
    id: 6,
    title: "Predesigned Mini Cakes",
    name: "predesigned_mini_cakes",
  },
  {
    id: 7,
    title: "Predesigned Cakes",
    name: "predesigned_cakes",
  },
  {
    id: 8,
    title: "Sweet Table",
    name: "sweet_table",
  },
];

export const sampleData = {
  products: [
    {
      name: "MAIN",
      slug: "main",
      category: "Gateuax",
      images: ["/main.jpg", "/cupcakes.jpg"],
      price: "59.99",

      description:
        "Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.",
    },
    {
      name: "CUPCAKE",
      slug: "cupcake",
      category: "Mini Cakes",
      images: ["/cupcakes.jpg"],
      price: "59.99",

      description:
        "Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.",
    },
    {
      name: "CAKE JAR",
      slug: "cake-jar",
      category: "Cake Jars",
      images: ["/cake_jar.jpg", "/cupcakes.jpg"],
      price: "59.99",

      description:
        "Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.",
    },
    {
      name: "COOOKIES",
      slug: "cookies",
      category: "Cookies",
      images: ["/cookies.jpg", "/cupcakes.jpg"],
      price: "59.99",

      description:
        "Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.",
    },
  ],
};
