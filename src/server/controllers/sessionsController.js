const createSession = (req, res) => {
  res.status(200).send(req.body);
};

module.exports = {
  createSession,
};
