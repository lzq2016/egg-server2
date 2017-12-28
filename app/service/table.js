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

    * update(uuid, tableid, updates) {
      const option = {
        uuid: uuid,
        tableid: tableid
      };
      const table = yield this.ctx.model.Table.findOne({where: option});
      if (!table) {
        this.ctx.throw(404, '数据库中uuid或tableid不存在');
      }
      return yield table.update(updates);
    }

    * del(uuid,tableid) {
      const option = {
        uuid: uuid,
        tableid: tableid
      };
      const table = yield this.ctx.model.Table.findOne({where: option});
      if (!table) {
        this.ctx.throw(404, '数据库中uuid或tableid不存在');
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