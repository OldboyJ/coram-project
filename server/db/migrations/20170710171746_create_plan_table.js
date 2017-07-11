exports.up = function(knex, Promise) {
  return knex.schema.createTable('plans', function(table) {
    table.integer('PLANID');
    table.string('PLANNAME');
    table.integer('HCDEDUCTIBLE');
    table.integer('HCMAXOOP');
    table.integer('HCCOINSURPER');
    table.integer('HCCOPAY');
    table.integer('DRUGCOPAYT1');
    table.integer('DRUGCOPAYT2');
    table.integer('DRUGCOPAYT3');
    table.integer('DRUGCOPAYT4');
    table.integer('DRUGDEDUC');
    table.integer('PAYERID');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plans');
};
