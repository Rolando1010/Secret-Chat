const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
    logging: false
});

const id = {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
}

const modelOptions = {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
}

const foreignKey = (tableName) => ({
    type: DataTypes.INTEGER,
    references: {
        model: tableName,
        key: "id"
    }
});

module.exports = {
    sequelize,
    id,
    modelOptions,
    foreignKey
}