import { Model } from "sequelize";
import { postgresConnector } from "../../../core/utils/absoluteFilePath";
const { DataTypes, Sequelize } = require("sequelize");

class User extends Model {}
User.init(
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
export default User;
