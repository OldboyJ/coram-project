
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', (table) => {
    table.increments();
    table.integer('user_id');
    table.string('restaurant_name').notNullable();
    table.string('location').notNullable();
    table.date('date_visited');
    table.string('review');
    table.boolean('visited');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
