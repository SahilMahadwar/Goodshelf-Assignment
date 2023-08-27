export interface IProduct {
  _id: string;
  product_name: string;
  one_liner: string;
  price: number;
  quantity: string;
  section_name: string;
  product_images: string[];
  createdAt: string;
}

export interface IApiResponse<DataModel> {
  success: boolean;
  count?: number;
  data: DataModel;
}
