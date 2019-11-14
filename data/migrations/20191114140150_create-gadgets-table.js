
exports.up = function(knex) {
  return knex.schema.createTable('gadgets', table => {
      table.increments();
      table.string('name');
      table.string('manufacturer')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('gadgets')
};
