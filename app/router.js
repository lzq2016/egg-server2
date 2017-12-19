'use strict';

module.exports = app => {
  const {router, controller} = app;
  app.all('/user/login', app.oAuth2Server.token(app.config.oAuth2Server.expired));
  app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');
  app.post('/seller/setInfo', 'seller.setInfo');
  app.post('/menucatgory/create', 'menucatgory.create');
  app.post('/menucatgory/update', 'menucatgory.update');
};