module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(45),
      validate: {
        isEmail: true
      }
    },
    name: DataTypes.STRING(45),
    apiKey: DataTypes.CHAR(24),
    isAdmin: DataTypes.BOOLEAN
  });

  User.associate = (models) => {
    User.hasMany(models.Image);
  };

  return User;
};
