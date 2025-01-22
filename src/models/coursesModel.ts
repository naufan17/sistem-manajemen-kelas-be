import { Model } from "objection";
import Category from "./categoryModel";
import User from "./userModel";

class Course extends Model {
  course_id!: string;
  name!: string;
  description!: string;
  category_id!: number;
  category!: Category;
  user_id!: string;
  user!: User;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date;

  static get tableName() {
    return "courses";
  }

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "courses.category_id",
          to: "categories.category_id",
        },
      },
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "courses.user_id",
          to: "users.user_id",
        },
      },
    };
  }
}

export default Course;