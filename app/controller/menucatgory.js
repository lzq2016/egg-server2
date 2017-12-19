'use strict';

module.exports = app => {
  class MenucatgoryController extends app.Controller {
    * create() {
      if(this.ctx.request.body.uuid)
      {
        const result = yield this.ctx.service.menucatgory.create(this.ctx.request.body);
        if(result.dataValues.uuid)
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
        this.ctx.throw(404, '参数uuid不存在');
        this.ctx.body = {code: 0};
      }
    }
    * update() {
      if(this.ctx.request.body.categoryid)
      {
        const result = yield this.ctx.service.menucatgory.update(this.ctx.request.body.categoryid,this.ctx.request.body);
        if(result.dataValues.categoryid)
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
  }

  return MenucatgoryController;
};