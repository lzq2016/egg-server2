'use strict';

module.exports = app => {
  class TableController extends app.Controller {
    * create() {
      if(this.ctx.request.body.uuid)
      {
        const result = yield this.ctx.service.table.create(this.ctx.request.body);
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
      if(this.ctx.request.body.tableid)
      {
        const result = yield this.ctx.service.table.update(this.ctx.request.body.tableid,this.ctx.request.body);
        if(result.dataValues.tableid)
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
        this.ctx.throw(404, '参数tableid不存在');
        this.ctx.body = {code: 0};
      }
    }
    * del() {
      const tableid = this.ctx.params.tableid;
      if(tableid)
      {
        const result = yield this.ctx.service.table.del(tableid);
        if(result.dataValues.tableid)
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
        this.ctx.throw(404, '参数tableid不存在');
        this.ctx.body = {code: 0};
      }
    }
  }

  return TableController;
};