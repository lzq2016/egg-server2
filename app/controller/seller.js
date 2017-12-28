'use strict';

module.exports = app => {
  class SellerController extends app.Controller {
    * setInfo() {
      if(this.ctx.request.body.id)
      {
        const id = this.ctx.request.body.id;
        const result = yield this.ctx.service.seller.update(id,this.ctx.request.body);
        if(result.length >= 1)
        {
          this.ctx.body = {
            code: 1
          };
        }else{
          this.ctx.body = {
            code: 0
          };
        }

      }
      else{
        this.ctx.throw(404, '参数id不存在');
        this.ctx.body = {code: 0};
      }
    }
    * del() {
      const createRule = {
        uuid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.query);
      const uuid = this.ctx.query.uuid;
      const result = yield this.ctx.service.seller.del(uuid);
      if (result.dataValues.uuid) {
        this.ctx.body = {
          code: 1
        };
      } else {
        this.ctx.body = {
          code: 0
        };
      }
    }
  }

  return SellerController;
};