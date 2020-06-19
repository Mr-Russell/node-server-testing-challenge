
exports.up = function(knex) {
  return knex.schema
    .createTable('people', tbl => {
      tbl.increments();
      tbl.string('name', 100)
        .notNullable()
        .unique();
      tbl.string('birthplace', 100)
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('people')
};
