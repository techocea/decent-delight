export const NAV_ITEMS = [
  {
    id: 1,
    href: "/about",
    label: "About us",
  },
  {
    id: 2,
    label: "Cakes",
    children: [
      { href: "/category/gateaux", label: "Gateaux" },
      { href: "/category/predesigned_mini_cakes", label: "Mini Cakes" },
      { href: "/category/predesigned_cakes", label: "Cakes" },
    ],
  },
  {
    id: 3,
    label: "Sweets",
    children: [
      { href: "/category/cake_jars", label: "Cake Jars" },
      { href: "/category/cookies", label: "Cookies" },
      { href: "/category/brownies", label: "Brownies" },
      { href: "/category/cupcakes", label: "Cupcakes" },
      { href: "/category/sweet_table", label: "Sweet Table" },
    ],
  },
];

export const DASHBOARD_NAV_ITEMS = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/dashboard/orders",
    label: "Orders",
  },
  {
    href: "/dashboard/products",
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
