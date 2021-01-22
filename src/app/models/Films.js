import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        title: Sequelize.STRING,
        movieDirector: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default User;