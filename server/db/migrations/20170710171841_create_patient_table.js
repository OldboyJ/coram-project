exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', function(table) {
    table.string('PATIENTID');
    table.string('FIRSTNAME');
    table.string('LASTNAME');
    table.string('REFERRALSRC');
    table.string('PRIMPLAN');
    table.integer('DEDMET');
    table.integer('DEDMEFORYEAR');
    table.integer('OOPMAXTODATE');
    table.integer('OOPMET');
    table.integer('PRIMARYPLANID');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient');
};
