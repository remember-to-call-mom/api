module.exports = (finale, seqelize) => {
  const usersResource = finale.resource({
    model: seqelize.User,
    endpoints: ['/users', '/users/:id'],
  });

  usersResource.all.start((req, res, context) => {
    console.log(`[Users] Starting ${req.method} for ${req.url}`, req.body);

    return context.continue;
  });
};
