var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET list of all patients. */
router.get('/', function(req, res) {
  knex('patients').select().then((patients) => {
    res.send(patients)
  });
});

router.get('/:id', function(req, res) {
  knex('patients').select().where('id', req.params.id).then((patients) => { res.send(patients)

  })
});

module.exports = router;
