// Initializes the `users` service on path `/users`
const { ContactRequests } = require('./contactRequests.class');
const createModel = require('../../models/contactRequests.model');
const hooks = require('./contactRequests.hooks');
const { Service } = require('feathers-sequelize');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    name: 'contactRequests',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contactRequests', new Service(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('contactRequests');

  service.hooks(hooks);
};
