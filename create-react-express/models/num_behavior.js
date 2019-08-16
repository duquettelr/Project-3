module.exports = function (sequelize, DataTypes) {
    var Num_Behavior = sequelize.define("Num_Behavior", {
        num_behavior: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Num_Behavior.associate = function (models) {
        models.Num_Behavior.belongsTo(models.Behavior, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Num_Behavior;
}