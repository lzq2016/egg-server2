'use strict';

module.exports = app => {
  const { STRING, INTEGER, UUID,DataTypes } = app.Sequelize;

  const Table = app.model.define('table', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid:STRING,
    tableid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    tablename:STRING,
    status:STRING //0 全部 1 已点餐 2 未点餐
  });
  Table.prototype.associate = function() {
    app.model.Table.belongsTo(app.model.Seller, {foreignKey: 'uuid'});
  };
  return Table;
};