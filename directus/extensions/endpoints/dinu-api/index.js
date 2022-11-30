'use strict';

var index = (router) => {
  router.get('/', (req, res) => {
    console.log(':cookies', req.cookies);
    console.log(':headers', req.headers);
    res.send('Hello, World!');
  });
};

module.exports = index;
