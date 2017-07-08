var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`select * from users`).then((data) => {
    res.render('index', { title: 'Express' });
  });
});

module.exports = router;
