/*

Endpoints
GET /
GET /spoilers?name_like=name

*/

import jsonServer from 'json-server';

const FIXTURES_PATH = './fixtures/db.json';
const server = jsonServer.create();
const router = jsonServer.router(FIXTURES_PATH);
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(router);
server.listen(1337, function () {
  console.log('Winter is coming ❄️')
});
