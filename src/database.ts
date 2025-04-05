import { Sequelize } from 'Sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: console.log,
});

export default sequelize;
