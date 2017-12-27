'use strict';

module.exports = app => {
  const { STRING, INTEGER,BOOLEAN, UUID,DataTypes } = app.Sequelize;

  const Dish = app.model.define('dish', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid:STRING,
    categoryid:STRING,
    dishid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    dishname:STRING
  });
  Dish.prototype.associate = function() {
    app.model.Dish.belongsTo(app.model.Menucatgory, {foreignKey: 'categoryid'});
    app.model.Dish.belongsTo(app.model.Seller, {foreignKey: 'uuid'});
  };
  return Dish;
};