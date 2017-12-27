'use strict';

module.exports = app => {
  return class Dish extends app.Service {
    // * find(option) {
    //   let seller = yield this.ctx.model.Seller.findOne({where: option});
    //   if (!seller) {
    //     return 0;
    //   }
    //   return seller;
    // }

    * create(option) {
      return yield this.ctx.model.Dish.create(option);
    }

    * update(dishid, updates) {
      const dish = yield this.ctx.model.Dish.findOne({dishid: dishid});
      if (!dish) {
        this.ctx.throw(404, '数据库中dishid不存在');
      }
      return yield dish.update(updates);
    }
    * del(dishid) {
      const dish = yield this.ctx.model.Dish.findOne({dishid: dishid});
      if (!dish) {
        this.ctx.throw(404, '数据库中dish不存在');
      }
      return dish.destroy();
    }
  };
};