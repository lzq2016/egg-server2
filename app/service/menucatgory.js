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

    * update(uuid,categoryid,updates) {
      const option = {
        uuid:uuid,
        categoryid:categoryid
      };
      const category = yield this.ctx.model.Menucatgory.findOne({where:option});
      if (!category) {
        this.ctx.throw(404, '数据库中categoryid或uuid不存在');
      }
      return yield category.update(updates);
    }

    * del(uuid,categoryid) {
      const option = {
        uuid:uuid,
        categoryid:categoryid
      };
      const category = yield this.ctx.model.Menucatgory.findOne({where:option});
      if (!category) {
        this.ctx.throw(404, '数据库中categoryid或uuid不存在');
      }
      return category.destroy();
    }
  };
};