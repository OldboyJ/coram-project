'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('payer', (table) => {
    table.integer('PAYERID');
    table.string('PAYERNAME');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('payer');
};
