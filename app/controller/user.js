'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * authenticate() {
      // const createRule = {
      //   authorization: 'string'
      // };
      // this.ctx.validate(createRule);
      // this.validator.validate(createRule, this.ctx.req.header);
      this.ctx.body = 'ok';
      this.ctx.status = 200;
    }

    * getuser() {
      const openid = this.ctx.query.openid;
      this.ctx.body = yield this.ctx.service.user.getUser(openid);
    }
  }

  return UserController;
};