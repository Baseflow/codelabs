export interface ProductData {
  productId: string;
  type: "SUBSCRIPTION" | "NON_SUBSCRIPTION";
}

export const productDataMap: { [productId: string]: ProductData } = {
  "consumable": {
    productId: "consumable",
    type: "NON_SUBSCRIPTION",
  },
  "subscription_silver": {
    productId: "subscription_silver",
    type: "SUBSCRIPTION",
  },
};
