'use strict';

module.exports = app => {
  const { STRING, INTEGER,BOOLEAN, UUID,DataTypes } = app.Sequelize;

  const Menucatgory = app.model.define('menucatgory', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid:STRING,
    categoryid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    categoryname:STRING
  });
  Menucatgory.prototype.associate = function() {
    // app.model.Seller.hasMany(app.model.Menucatgory, { foreignKey: 'uuid' });
    // app.model.User.hasOne(app.model.findcar, { foreignKey: 'openid' });
  };
  return Menucatgory;
};