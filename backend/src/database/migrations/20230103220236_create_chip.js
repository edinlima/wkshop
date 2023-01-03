/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('chips', function (table) {
    table.increments('id');

    table.string('mei').notNullable();
    table.string('linha').notNullable();
    table.string('operadora').notNullable();
    table.string('franquia_dados').notNullable().defaultTo('10GB');
    table.string('franquia_voz').notNullable().defaultTo('ilimitado');

    //table.string('servidor_id').notNullable();

    //table.foreign('ong_id').references('id').inTable('ongs');

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
