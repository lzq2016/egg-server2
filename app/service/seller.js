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

    // * update({id, updates}) {
    //   const user = yield this.ctx.model.User.findById(id);
    //   if (!user) {
    //     this.ctx.throw(404, 'user not found');
    //   }
    //   return yield user.update(updates);
    // }
    //
    // * del(id) {
    //   const user = yield this.ctx.model.User.findById(id);
    //   if (!user) {
    //     this.ctx.throw(404, 'user not found');
    //   }
    //   return user.destroy();
    // }
  };
};