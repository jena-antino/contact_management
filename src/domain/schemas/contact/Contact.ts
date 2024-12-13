import { Model } from "sequelize";
import { postgresConnector } from "../../../core/utils/absoluteFilePath";
const { DataTypes } = require("sequelize");

export default class ContactModel extends Model {}

ContactModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "others",
    },
    status: {
      type: DataTypes.ENUM,
      values: ["draft", "finalized"],
      defaultValue: "draft",
      allowNull: false,
    },
  },
  {
    sequelize: postgresConnector,
    modelName: "contact",
    tableName: "contact",
    timestamps: true,
    paranoid: true, // Adds `deletedAt` for soft deletes
  },
);
