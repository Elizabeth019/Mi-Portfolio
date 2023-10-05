const server = require ('./src/app');
const {conn} =require('./src/db');

conn.async({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
  });
})