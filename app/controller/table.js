'use strict';

module.exports = app => {
  class TableController extends app.Controller {
    * create() {
      const createRule = {
        tablename: 'string',
        uuid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.request.body);
      const result = yield this.ctx.service.table.create(this.ctx.request.body);
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

    * update() {
      const createRule = {
        tablename: 'string',
        uuid: 'string',
        tableid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.request.body);
      const uuid = this.ctx.request.body.uuid;
      const tableid = this.ctx.request.body.tableid;
      const result = yield this.ctx.service.table.update(uuid, tableid, this.ctx.request.body);
      if (result.dataValues.tableid) {
        this.ctx.body = {
          code: 1
        };
      } else {
        this.ctx.body = {
          code: 0
        };
      }
    }

    * del() {
      const createRule = {
        uuid: 'string',
        tableid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.query);
      const uuid = this.ctx.query.uuid;
      const tableid = this.ctx.query.tableid;
      const result = yield this.ctx.service.table.del(uuid,tableid);
      if (result.dataValues.tableid) {
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

  return TableController;
};