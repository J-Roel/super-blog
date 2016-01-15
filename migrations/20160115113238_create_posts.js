
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.integer('author_id').notNullable();
    table.string('description').notNullable();
    table.text('text').notNullable();
    table.date('date').notNullable();
    table.integer('likes').notNullable();
    table.integer('dislikes').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
