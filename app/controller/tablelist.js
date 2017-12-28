'use strict';

module.exports = app => {
  class TablelistController extends app.Controller {
    * getlist() {
      const createRule = {
        type: 'string',
        uuid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.query);
      let list = [];
      const uuid = this.ctx.query.uuid;
      const type = this.ctx.query.type;
      const result = yield this.ctx.service.table.getlist(uuid, type);
      if (result.length != 0) {
        for (let i = 0; i < result.length; i++) {
          list.push(result[i].dataValues);
        }
        this.ctx.body = {
          code: 1,
          list: list
        };
      } else {
        this.ctx.body = {
          code: 0,
          list: []
        };
      }
    }

    // * create() {
    //   if(this.ctx.request.body.uuid)
    //   {
    //     const result = yield this.ctx.service.table.create(this.ctx.request.body);
    //     if(result.dataValues.uuid)
    //     {
    //       this.ctx.body = {
    //         code: 1
    //       };
    //     }else{
    //       this.ctx.body = {
    //         code: 0
    //       };
    //     }
    //
    //   }
    //   else{
    //     this.ctx.throw(404, '参数uuid不存在');
    //     this.ctx.body = {code: 0};
    //   }
    // }
    // * update() {
    //   if(this.ctx.request.body.tableid)
    //   {
    //     const result = yield this.ctx.service.table.update(this.ctx.request.body.tableid,this.ctx.request.body);
    //     if(result.dataValues.tableid)
    //     {
    //       this.ctx.body = {
    //         code: 1
    //       };
    //     }else{
    //       this.ctx.body = {
    //         code: 0
    //       };
    //     }
    //
    //   }
    //   else{
    //     this.ctx.throw(404, '参数tableid不存在');
    //     this.ctx.body = {code: 0};
    //   }
    // }
    // * del() {
    //   const tableid = this.ctx.params.tableid;
    //   if(tableid)
    //   {
    //     const result = yield this.ctx.service.table.del(tableid);
    //     if(result.dataValues.tableid)
    //     {
    //       this.ctx.body = {
    //         code: 1
    //       };
    //     }else{
    //       this.ctx.body = {
    //         code: 0
    //       };
    //     }
    //   }else{
    //     this.ctx.throw(404, '参数tableid不存在');
    //     this.ctx.body = {code: 0};
    //   }
    // }
  }

  return TablelistController;
};