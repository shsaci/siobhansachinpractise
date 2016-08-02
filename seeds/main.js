
exports.seed = function(knex, Promise) {
  return knex('wombles').del()
    .then(function () {
      return Promise.all([
        knex('wombles').insert({name: 'Siobhan',characteristic_id: 1, rubbish_id: 7}),
        knex('wombles').insert({name: 'Sach',characteristic_id: 2, rubbish_id: 8}),
        knex('wombles').insert({name: 'Jana',characteristic_id: 3, rubbish_id: 9})
      ])
    })
}
