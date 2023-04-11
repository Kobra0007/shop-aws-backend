export default {
  type: "object",
  properties: {
    productName: { type: 'string' },
    productMedia: { type: 'string' },
    price: { type: 'number' },
    description: { type: 'string' },
  },
  required: ['productName, productMedia, price, description']
} as const;
