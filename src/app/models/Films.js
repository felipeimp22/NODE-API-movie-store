import Sequelize, { Model } from 'sequelize';

class Films extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        movie_director: Sequelize.STRING,
        leased: Sequelize.BOOLEAN
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Films;