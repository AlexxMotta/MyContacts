const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

// client.query('SELECT * FROM contacts;').then((result) => {
//   console.log(result);
// });

// client.query('SELECT * FROM contacts;').then(console.log);

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
