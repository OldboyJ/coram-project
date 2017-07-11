exports.up = function(knex, Promise) {
  return knex.schema.createTable('drug', function(table) {
    table.integer('DRUGID');
    table.string('DRUGTYPE');
    table.string('DRUGNAME');
    table.integer('DOSE');
    table.integer('TIER');
    table.integer('HCCOST');
    table.integer('COSTPERDOSE');
    table.integer('PAYERID');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drug');
};
