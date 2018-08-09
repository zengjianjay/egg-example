'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');

class ApiController extends Controller {
  async c1() {
    const { ctx } = this;
    let data = {};
    let categories = [],
      num = [];
    for (let i = 1; i < 6000; i++) {
      categories.push(i.toString());
      num.push(Math.random() * 100);
    }
    data = { categories, data: num };
    this.ctx.body = JSON.stringify(data);
  }
}

module.exports = ApiController;
