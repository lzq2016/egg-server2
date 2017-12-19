'use strict';

module.exports = app => {
  return class Menucatgory extends app.Service {
    // * find(option) {
    //   let seller = yield this.ctx.model.Seller.findOne({where: option});
    //   if (!seller) {
    //     return 0;
    //   }
    //   return seller;
    // }

    * create(option) {
      return yield this.ctx.model.Menucatgory.create(option);
    }

    * update(categoryid, updates) {
      const category = yield this.ctx.model.Menucatgory.findOne({categoryid: categoryid});
      if (!category) {
        this.ctx.throw(404, '数据库中categoryid不存在');
      }
      return yield category.update(updates);
    }

    // * del(id) {
    //   const user = yield this.ctx.model.User.findById(id);
    //   if (!user) {
    //     this.ctx.throw(404, 'user not found');
    //   }
    //   return user.destroy();
    // }
  };
};