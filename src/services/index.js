const users = require('./users/users.service.js');
const contactRequests = require('./contactRequests/contactRequests.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(contactRequests);
};
