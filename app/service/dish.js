'use strict';

module.exports = app => {
  return class Dish extends app.Service {
    * find(option) {
      let seller = yield this.ctx.model.Dish.findAll({where: option});
      if (!seller) {
        return 0;
      }
      return seller;
    }

    * create(option) {
      return yield this.ctx.model.Dish.create(option);
    }

    * update(uuid, dishid, updates) {
      const option = {
        uuid: uuid,
        dishid: dishid
      };
      const dish = yield this.ctx.model.Dish.findOne({where:option});
      if (!dish) {
        this.ctx.throw(404, '数据库中uuid或dishid不存在');
      }
      return yield dish.update(updates);
    }

    * del(uuid,dishid) {
      const option = {
        uuid:uuid,
        dishid:dishid
      };
      const dish = yield this.ctx.model.Dish.findOne({where:option});
      if (!dish) {
        this.ctx.throw(404, '数据库中uuid或dish不存在');
      }
      return dish.destroy();
    }
  };
};