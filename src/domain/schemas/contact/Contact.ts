import { Model, DataTypes } from "sequelize";
import { postgresConnector } from "../../../core/utils/absoluteFilePath";
import crypto from "crypto";

interface ContactAttributes {
  id: string;
  contact_id: string;
  name: string;
  email: string;
  phone_number: string;
  tag?: string;
  status: "draft" | "finalized";
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export default class ContactModel extends Model<ContactAttributes> implements ContactAttributes {
  public id!: string;
  public contact_id!: string;
  public name!: string;
  public email!: string;
  public phone_number!: string | null;
  public tag!: string;
  public status!: "draft" | "finalized";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;
}

ContactModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    contact_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        len: [5, 5],
        isAlphanumeric: true,
      },
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
      allowNull: false,
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
    tableName: "contacts",
    timestamps: true,
    paranoid: true,
    hooks: {
      beforeCreate: (contact: ContactModel) => {
        contact.contact_id = generateRandomId(5);
      },
    },
  },
);

function generateRandomId(length: number): string {
  return crypto
    .randomBytes(length)
    .toString("base64")
    .replace(/[^a-zA-Z0-9]/g, "")
    .substring(0, length);
}
