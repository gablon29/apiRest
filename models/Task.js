import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define(
    "Task",
    {
        Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        name: {
        type: DataTypes.STRING,
        },
        description: {
        type: DataTypes.STRING,
        },
        status: {
        type: DataTypes.ENUM("pending", "completed"),
        defaultValue: "pending",
        },
    },
    {
        timestamps: false,
        tableName: "Task",
    }
    );

export default Task;