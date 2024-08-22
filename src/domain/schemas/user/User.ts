import { Model } from "sequelize";
import { postgresConnector } from "../../../core/utils/absoluteFilePath";
const { DataTypes, Sequelize } = require("sequelize");

class UserModel extends Model {}
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize: postgresConnector,
    modelName: "user",
    tableName: "user",
  },
);
export default UserModel;
