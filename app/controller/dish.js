'use strict';

module.exports = app => {
  class DishController extends app.Controller {
    * create() {
      if(this.ctx.request.body.categoryid)
      {
        const result = yield this.ctx.service.dish.create(this.ctx.request.body);
        if(result.dataValues.dishid)
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
        this.ctx.throw(404, '参数categoryid不存在');
        this.ctx.body = {code: 0};
      }
    }
    * update() {
      if(this.ctx.request.body.dishid)
      {
        const result = yield this.ctx.service.dish.update(this.ctx.request.body.dishid,this.ctx.request.body);
        if(result.dataValues.dishid)
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
        this.ctx.throw(404, '参数dishid不存在');
        this.ctx.body = {code: 0};
      }
    }
    * del() {
      const dishid = this.ctx.params.dishid;
      if(dishid)
      {
        const result = yield this.ctx.service.dish.del(dishid);
        if(result.dataValues.dishid)
        {
          this.ctx.body = {
            code: 1
          };
        }else{
          this.ctx.body = {
            code: 0
          };
        }
      }else{
        this.ctx.throw(404, '参数dishid不存在');
        this.ctx.body = {code: 0};
      }
    }
  }

  return DishController;
};