const { User } = require('../models');

const userData = [
  {
    name: 'Betty',
    email: 'betty@hotmail.com',
    password: 'password12345',
  },
  {
    name: 'Tommy',
    email: 'tommy@hotmail.com',
    password: 'password12345',
  },
  {
    name: 'Sue',
    email: 'sue@hotmail.com',
    password: 'password12345',
  },
  {
    name: 'Lernard',
    email: 'lernard@gmail.com',
    password: 'password12345',
  },
  {
    name: 'Miko',
    email: 'miko2k20@aol.com',
    password: 'password12345',
  },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
