import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'bzoom9apvbweajckbkcq-mysql.services.clever-cloud.com',
  user: 'uyk9kfui9r9o339k',
  password: 'iS3XEtroHIgIJGeXFux6',
  database: 'bzoom9apvbweajckbkcq',
  connectionLimit: 20,
});

export default pool;
