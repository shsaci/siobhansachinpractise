exports.up = function(knex, Promise) {
  return knex.schema.createTable('rubbish', function(table){
    table.increments('id').primary()
    table.string('name')
    table.string('rubbish_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rubbish')
}
