module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classroom_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_of_birth: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teacher_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bcba_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Student.associate = function (models) {
        Student.hasMany(models.Behavior,
            {
                onDelete: "cascade"
            })
        models.Student.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Student;
}