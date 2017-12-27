'use strict';

module.exports = app => {
  return class Table extends app.Service {
    // * find(option) {
    //   let seller = yield this.ctx.model.Seller.findOne({where: option});
    //   if (!seller) {
    //     return 0;
    //   }
    //   return seller;
    // }

    * create(option) {
      return yield this.ctx.model.Table.create(option);
    }

    * update(tableid, updates) {
      const table = yield this.ctx.model.Table.findOne({where: {tableid: tableid}});
      if (!table) {
        this.ctx.throw(404, '数据库中tableid不存在');
      }
      return yield table.update(updates);
    }

    * del(tableid) {
      const table = yield this.ctx.model.Table.findOne({where: {tableid: tableid}});
      if (!table) {
        this.ctx.throw(404, '数据库中tableid不存在');
      }
      return table.destroy();
    }

    * getlist(uuid, type) {
      let option = {};
      if (type == 0) {
        option = {
          where: {
            uuid: uuid
          }
        };
      } else {
        option = {
          where: {
            uuid: uuid,
            status: type
          }
        };
      }
      return yield this.ctx.model.Table.findAll(option);
    }
  };
};