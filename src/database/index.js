import Sequelize from 'sequelize';

// Importando dados de acesso ao banco de dados.
import databaseConfig from '../config/database';

// Importando os models

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connect = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connect));
  }
}

export default new Database();
