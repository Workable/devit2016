// Endpoints
// GET /
// GET /spoilers?name_like=name

import jsonServer from 'json-server';

const FIXTURES_PATH = './fixtures/db.json';
const server = jsonServer.create();
const router = jsonServer.router(FIXTURES_PATH);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add a fake delay in responses, we want to show some loaders
server.use(function (req, res, next) {
  var delay = Math.random() * 200 + 100;
  setTimeout(function () {
    next()
  }, delay);
})

server.use(router);
server.listen(1337, function () {
  console.log('Winter is coming ❄️')
});
