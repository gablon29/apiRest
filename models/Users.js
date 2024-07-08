
export default (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
            ID: {
                type: DataTypes.STRING,
                primaryKey: true,
                field: "Id"
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        })
    return Users;
}
