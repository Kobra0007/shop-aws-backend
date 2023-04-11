export interface Product {
  id: string,
  productName: string,
  productMedia: string
  price: number,
  description: string
}

export const mockProducts: Product[] = [
  {
    description: "Short Product Description1",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 24,
    productName: "ProductOne",
    productMedia: "https://i.seadn.io/gcs/files/c2883f4c264b720fe1a7a1ff4119e367.png?auto=format&w=500&h=500"
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    productName: "ProductTitle",
    productMedia: "https://i.seadn.io/gcs/files/993fb5fc51ba0ad55f15e2856bc32f83.png?auto=format&w=500&h=500"

  },
  {
    description: "Short Product Description2",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    productName: "Product",
    productMedia: "https://i.seadn.io/gcs/files/90319cbe55a88e2051b09e5d4058ce43.png?auto=format&w=500&h=500"

  },
  {
    description: "Short Product Description4",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    productName: "ProductTest",
    productMedia: "https://i.seadn.io/gcs/files/23a3bec32e88eb772e0345f7ce3aede3.jpg?auto=format&w=500&h=500"

  },
  {
    description: "Short Product Descriptio1",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    productName: "Product2",
    productMedia: "https://i.seadn.io/s/production/7ac5d8ee-0c32-4d3e-a23d-5a1f759dd9a5.png?w=500&auto=format"

  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 15,
    productName: "ProductName",
    productMedia: "https://i.seadn.io/gcs/files/fcbbe58025b7a216e1f810af5c9e01dc.png?auto=format&w=500&h=500"

  },
];
