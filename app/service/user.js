'use strict';

module.exports = app => {
  return class User extends app.Service {
    * find(option) {
      let user = yield this.ctx.model.User.findOne({where: option});
      if (!user) {
        // this.ctx.throw(404, 'user not found');
        return 0;
      }
      return user;
    }

    * create(user) {
      return yield this.ctx.model.User.create(user);
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