module.exports = (finale, seqelize) => {
  const reminderResource = finale.resource({
    model: seqelize.Reminder,
    endpoints: ['/reminders', '/reminders/:id'],
  });

  reminderResource.all.start((req, res, context) => {
    console.log(`Starting ${req.method} for ${req.url}`, req.body);

    return context.continue;
  });
};
