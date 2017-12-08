'use strict';

module.exports = app => {
	app.all('/user/login', app.oAuth2Server.token(app.config.oAuth2Server.expired));
    app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');
};