'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.ejs');
    // this.ctx.body = 'hi, egg, hello';
  }
}

module.exports = HomeController;
