const path = require('path');
// const nconf = require('nconf');

module.exports = app => {

  class Model {
    constructor(ctx) {
      this.ctx = ctx;
    }

    * getClient(clientId, clientSecret) {
      app.logger.debug("getClient");
      app.logger.debug(clientId, "clientId");
      app.logger.debug(clientSecret, "clientSecret");

      let user = null;

      const result = yield this.ctx.curl('https://api.weixin.qq.com/sns/jscode2session', {
        // 必须指定 method
        method: 'GET',
        // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
        contentType: 'json',
        data: {
          appid: "wxaa96bb0942b0eff2",
          secret: "0b44d65c2e289bc8bee75e5b9df23b99",
          js_code: clientId,
          grant_type: "authorization_code"
        },
        // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        dataType: 'json',
      });
      app.logger.debug(result, "loginResult");
      if (result.status != 200) {
        this.ctx.throw(result.status, "openid接口请求错误");
        return false;
      }
      else if (result.data.errcode) {
        const errorMsg = result.data && result.data.errmsg ? result.data.errmsg : 'unknown error';
        this.ctx.throw(result.status, errorMsg);
      }
      if (parseInt(clientSecret) == 1) {
        user = yield this.ctx.service.seller.find({openid: result.data.openid});
      }
      else {
        user = yield this.ctx.service.user.find({openid: result.data.openid});
      }
      if (user == 0) {
        if (parseInt(clientSecret) == 1) {
          user = yield this.ctx.service.seller.create({openid: result.data.openid});
        }
        else {
          user = yield this.ctx.service.user.create({openid: result.data.openid});
        }
      }
      const client = Object.assign({
        "grants": [
          "password"
        ],
        openid: result.data.openid,
        session_key: result.data.session_key
      }, {
        user:user.dataValues
      });
      return client;
    }

    * getUser(username, password) {
      app.logger.debug("getUser");
      app.logger.debug(username, "username");
      app.logger.debug(password, "password");


      // app.logger.debug(user);
      // if(user.dataValues.password != password)
      // {
      //       this.ctx.throw("密码错误！");
      // }

      return {
        username:null,
        password:null
      };
    }

    * getAccessToken(bearerToken) {
      app.logger.debug("getAccessToken");
      app.logger.debug(this.ctx.session[bearerToken], "session");
      if (!this.ctx.session[bearerToken]) {
        return;
      }
      this.ctx.session.save();
      const token = {};
      token.accessTokenExpiresAt = new Date(this.ctx.session[bearerToken].accessTokenExpiresAt);
      // token.refreshTokenExpiresAt = new Date(token.refreshTokenExpiresAt);
      token.user = {};
      token.client = {};
      return token;
    }

    * saveToken(token, client, user) {
      app.logger.debug("saveToken");
      console.log(token, "token");
      console.log(user, "user");
      console.log(client, "client");

      this.ctx.session[token["accessToken"]] = {
        session_key: client.session_key,
        openid: client.openid,
        accessTokenExpiresAt: token.accessTokenExpiresAt
      };
      this.ctx.session.maxAge = 3024000;
      token.users = client.user;
      const _token = Object.assign({}, token, {
        user
      }, {
        client
      });
      return _token;
    }
  }

  return Model;
};