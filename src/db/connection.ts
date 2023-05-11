import { Sequelize } from "sequelize";

const sequelize = new Sequelize('bzoom9apvbweajckbkcq', 'uyk9kfui9r9o339k', 'iS3XEtroHIgIJGeXFux6', {
    host: 'bzoom9apvbweajckbkcq-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306
  });
  

export default sequelize;