'use strict';

module.exports = app => {
  class DishController extends app.Controller {
    * create() {
      const createRule = {
        dishname: 'string',
        uuid: 'string',
        categoryid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.request.body);
      const result = yield this.ctx.service.dish.create(this.ctx.request.body);
      if (result.dataValues.dishid) {
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
        dishname: 'string',
        uuid: 'string',
        dishid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.request.body);
      const uuid = this.ctx.request.body.uuid;
      const dishid = this.ctx.request.body.dishid;
      const result = yield this.ctx.service.dish.update(uuid, dishid, this.ctx.request.body);
      if (result.dataValues.dishid) {
        this.ctx.body = {
          code: 1
        };
      } else {
        this.ctx.body = {
          code: 0
        };
      }
    }
    * find() {
      const createRule = {
        uuid: 'string',
        recommend:'string'
      };
      this.ctx.validate(createRule, this.ctx.query);
      var option = {
        uuid:this.ctx.query.uuid,
        recommend:this.ctx.query.recommend
      };
      const result = yield this.ctx.service.dish.find(option);
      if (result.length) {
        this.ctx.body = {
          code: 1,
          list:result
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
        dishid: 'string'
      };
      this.ctx.validate(createRule, this.ctx.query);
      const uuid = this.ctx.query.uuid;
      const dishid = this.ctx.query.dishid;
      const result = yield this.ctx.service.dish.del(uuid,dishid);
      if (result.dataValues.dishid) {
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

  return DishController;
};