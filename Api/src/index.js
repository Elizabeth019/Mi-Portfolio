// const server = require ('./app');
// const {conn} =require('./db');

// conn.async({ force: false }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001');
//   });
// })

const app = require('./app');	

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})