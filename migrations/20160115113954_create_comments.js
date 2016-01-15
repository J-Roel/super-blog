
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.integer('post_id').notNullable();
    table.string('author_id').notNullable();
    table.date('date').notNullable();
    table.text('comment').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
