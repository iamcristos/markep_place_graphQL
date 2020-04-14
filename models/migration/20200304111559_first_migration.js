
exports.up = function(knex) {
  return knex.schema
    .createTable('locations', function(table) {
        table.increments('id');
        table.string('city', 255).notNullable();
        table.string("lga", 255).notNullable();
        table.unique(['city', 'lga'])
    })
    .createTable('users', function (table) {
        table.increments('id');
        table.string('email', 255).notNullable().unique();
        table.string("password", 255).notNullable();
        table.string("profile_url", 255)
        table.integer('location_id').unsigned().references('locations.id').onDelete('Cascade').onUpdate('Cascade');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("locations")
};
