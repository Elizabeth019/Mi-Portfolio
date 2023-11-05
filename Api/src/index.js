const server = require ('./app');
const {conn} =require('./db');

conn.async({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
  });
})