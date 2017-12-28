'use strict';

module.exports = app => {
  const {router, controller} = app;
  app.all('/user/login', app.oAuth2Server.token(app.config.oAuth2Server.expired));
  app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');

  app.post('/seller/setInfo', 'seller.setInfo');
  app.get('/seller/del', 'seller.del');

  app.post('/menucatgory/create', 'menucatgory.create');
  app.post('/menucatgory/update', 'menucatgory.update');
  app.get('/menucatgory/del', 'menucatgory.del');

  app.post('/dish/create', 'dish.create');
  app.post('/dish/update', 'dish.update');
  app.get('/dish/del', 'dish.del');

  app.post('/table/create', 'table.create');
  app.post('/table/update', 'table.update');
  app.get('/table/del', 'table.del');

  app.get('/tablelist/getlist', 'tablelist.getlist');
};