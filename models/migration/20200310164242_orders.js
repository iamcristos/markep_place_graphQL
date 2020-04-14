
exports.up = function(knex) {
  return knex.schema
    .createTable("orders", function(table) {
        table.increments('id');
        table.integer('buyer').references('users.id').onDelete('Cascade').onUpdate('Cascade');
        table.integer('product').references('products.id').onDelete('Cascade').onUpdate('Cascade');
        table.text("message").notNullable();
        table.boolean('processed').defaultTo(false);
        table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('orders')
};
