const jsonServer = require('jsonserver');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middleware = jsonServer.default({
    static:'./bulid'
});
const PORT = process.env.PORT  || 8080;
server.use(middleware);
server.use(jsonServer.rewriter({
    '/api/*' :'/$1',
}))

server.use(router);
server.listen(PORT,() => {
    console.log('server is running')
});