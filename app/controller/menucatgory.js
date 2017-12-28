'use strict';

module.exports = app => {
  class MenucatgoryController extends app.Controller {
    * create() {
      const createRule = {
        categoryname: 'string',
        uuid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.request.body);
      const result = yield this.ctx.service.menucatgory.create(this.ctx.request.body);
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
        categoryname: 'string',
        uuid: 'string',
        categoryid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.request.body);
      const categoryid = this.ctx.request.body.categoryid;
      const uuid = this.ctx.request.body.uuid;
      const result = yield this.ctx.service.menucatgory.update(uuid, categoryid, this.ctx.request.body);
      if (result.dataValues.categoryid) {
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
        categoryid: 'string',
        uuid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.query);
      const categoryid = this.ctx.query.categoryid;
      const uuid = this.ctx.query.uuid;
      const result = yield this.ctx.service.menucatgory.del(uuid,categoryid);
      if (result.dataValues.categoryid) {
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

  return MenucatgoryController;
};