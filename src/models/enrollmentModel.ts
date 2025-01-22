import { Model } from "objection";
import Course from "./coursesModel";
import User from "./userModel";

class Enrollment extends Model {
  enrollment_id!: string;
  course_id!: string;
  course!: Course;
  user_id!: string;
  user!: User;
  progress!: number;
  createdAt!: Date;
  updateAt!: Date;

  static get tableName() {
    return "enrollments";
  }

  static get relationMappings() {
    return {
      course: {
        relation: Model.BelongsToOneRelation,
        modelClass: Course,
        join: {
          from: "enrollments.course_id",
          to: "courses.course_id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "enrollments.user_id",
          to: "users.user_id",
        },
      },
    };
  }
}

export default Enrollment;