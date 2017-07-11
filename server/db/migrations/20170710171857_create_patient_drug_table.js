exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients_drugs', function(table) {
    table.string('PATIENTID');
    table.integer('patientdrugid');
    table.integer('DRUGID');
    table.integer('DURATION');
    table.integer('APPROVED');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients_drugs');
};
