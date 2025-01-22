import { Model } from "objection";

class Category extends Model {
  category_id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static get tableName() {
    return "categories";
  }
}

export default Category;