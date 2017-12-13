'use strict';

module.exports = app => {
  const { STRING, INTEGER,BOOLEAN } = app.Sequelize;

  const Seller = app.model.define('seller', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    openid:STRING
  });
  Seller.prototype.associate = function() {
    // app.model.User.hasMany(app.model.Post, { foreignKey: 'openid' });
    // app.model.User.hasOne(app.model.findcar, { foreignKey: 'openid' });
  };
  return Seller;
};