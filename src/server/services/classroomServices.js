const { Session, Classroom } = require('../database/models');

const findAll = () => (
  Classroom.findAll({ order: ['name'], include: { model: Session, as: 'session' } })
    .then((data) => {
      if (data.length > 0) {
        // console.log(data);
        return { code: 200, data };
      } else {
        return { code: 400, data: 'no entries found!' };
      }
    })
    .catch((err) => {
      console.log(err);
      return { code: 500, data: 'Internal Server Error' };
    })
);

const createOne = form => (
  Classroom.create({ name: form.name })
    .then((data) => {
      console.log('created!', data.get({ plain: true }));
      return { code: 200, data: data.get({ plain: true }) };
    })
    .catch((err) => {
      console.log(err);
      return { code: 500, data: 'Internal Server Error' };
    })
);

const findOne = id => (
  Classroom.findOne({ where: { id }, include: { model: Session, as: 'session' } })
    .then((data) => {
      if (data) {
        console.log('found!', data.get({ plain: true }));
        return { code: 200, data: data.get({ plain: true }) };
      } else {
        return { code: 400, data: 'no entries found!' };
      }
    })
    .catch((err) => {
      console.log(err);
      return { code: 500, data: 'Internal Server Error' };
    })
);

const updateOne = (form, id) => (
  Classroom.update(
    { ...form },
    { returning: true, where: { id } }
  )
    .then((result) => {
      if (result.length > 1) {
        const [rowsUpdate, [data]] = result;
        return findOne(data.id);
      } else {
        return { code: 400, data: 'no entries found!' };
      }
    })
    .catch((err) => {
      console.log(err);
      return { code: 500, data: 'Internal Server Error' };
    })
);

const destroyOne = id => (
  Classroom.destroy({ where: { id } })
    .then((data) => {
      if (data) {
        return { code: 200, data };
      } else {
        return { code: 400, data: 'no entries found!' };
      }
    })
    .catch((err) => {
      console.log(err);
      return { code: 500, data: 'Internal Server Error' };
    })
);

module.exports = {
  findAll,
  createOne,
  findOne,
  updateOne,
  destroyOne
};
