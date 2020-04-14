
exports.up = function(knex) {
  return knex.schema
    .createTable('products', function(table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('description', 255).notNullable();
        table.integer('price').notNullable();
        table.integer('age').notNullable();
        table.enu('type', ['animal', 'plant']).notNullable();
        table.integer('user').references('users.id').onDelete('Cascade').onUpdate('Cascade');
        table.integer('weight');
        table.integer('height');
        table.integer('length');
        table.enu('animalType', ['livestock', 'birds'])
        table.enu('plantType', ['cereal', 'fruits', 'tubers', 'others'])
        table.unique(['type', 'name']);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products')
};
