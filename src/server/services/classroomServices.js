const { Session, Classroom } = require('../database/models');

const findAll = () => {
  return Classroom.findAll({ order: ['name'], include: { model: Session, as: 'session' } })
    .then((data) => {
      if (data.length > 0) {
        // console.log(data);
        return data;
      } else {
        return { code: 400, message: 'no entries found!' };
      }
    })
    .catch((err) => {
      console.log(err);
      return ({ code: 500, message: 'Internal Server Error' });
    });
};

module.exports = {
  findAll
};
