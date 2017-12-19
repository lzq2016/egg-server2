'use strict';

module.exports = app => {
  const { STRING, INTEGER,BOOLEAN, UUID,DataTypes } = app.Sequelize;

  const Seller = app.model.define('seller', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    openid:STRING,
    shopname:STRING,
    shopmanager:STRING,
    orders:INTEGER,
    saleamount:INTEGER
  });
  Seller.prototype.associate = function() {
    // app.model.User.hasMany(app.model.Post, { foreignKey: 'openid' });
    // app.model.User.hasOne(app.model.findcar, { foreignKey: 'openid' });
  };
  return Seller;
};