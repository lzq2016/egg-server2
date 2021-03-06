'use strict';

module.exports = app => {
  return class Seller extends app.Service {
    * find(option) {
      let seller = yield this.ctx.model.Seller.findOne({where: option});
      if (!seller) {
        // this.ctx.throw(404, 'user not found');
        return 0;
      }
      return seller;
    }

    * create(seller) {
      return yield this.ctx.model.Seller.create(seller);
    }

    * update(id, updates) {
      const seller = yield this.ctx.model.Seller.findById(id);
      if (!seller) {
        this.ctx.throw(404, '数据库中id不存在');
      }
      return yield this.ctx.model.Seller.update(updates,{where:{id:id}});
    }

    * del(uuid) {
      const option = {
        uuid:uuid
      };
      const seller = yield this.ctx.model.Seller.findOne({where:option});
      if (!seller) {
        this.ctx.throw(404, '数据库中uuid不存在');
      }
      return seller.destroy();
    }
  };
};