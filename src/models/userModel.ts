import { Model } from 'objection';

class User extends Model {
  user_id! : string;
  name! : string;
  email! : string;
  password! : string;
  role! : string;
  createdAt! : Date;
  updatedAt! : Date;

  static get tableName() {
    return 'users';
  }
}

export default User;
