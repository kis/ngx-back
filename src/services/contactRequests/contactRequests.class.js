const { Service } = require('feathers-sequelize');

exports.ContactRequests = class ContactRequests extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'contactRequests'
    });
  }

  async find(params) {
    return {
      services: Object.keys(this.app.services)
    }
    // return [{
    //   id: 1,
    //   text: 'Message 1'
    // }, {
    //   id: 2,
    //   text: 'Message 2'
    // }];
  }
  async get(id, params) {
    return {
      id,
      read: false,
      text: `Feathers is great!`
    };
  }
  async create(data, params) {
    this.messages.push(data);
    return data;
  }
  async update(id, data, params) {}
  async patch(id, data, params) {}
  async remove(id, params) {}
  setup(app, path) {
    this.app = app;
  }
};
