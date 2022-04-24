module.exports = (app) => {
  app.get('/api/legacy_cavemen', (req, res) => {
    res.send({ cavemen: [213, 432, 6345, 2345, 6547, 2234] });
  });
};
