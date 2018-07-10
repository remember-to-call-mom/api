const bcrypt = require('bcrypt');

module.exports = (finale, seqelize) => {
  const usersResource = finale.resource({
    model: seqelize.User,
    endpoints: ['/users', '/users/:id'],
  });

  // Change password to hashed one
  usersResource.create.write.before((req, res, context) => {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    req.body.password = hash;

    return context.continue;
  });

  usersResource.all.complete((req, res, context) => {
    console.log(`[Users] Starting ${req.method} for ${req.url}`, req.body);

    return context.continue;
  });
};
