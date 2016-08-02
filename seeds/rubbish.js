exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rubbish').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('rubbish').insert({name: 'polystyrene', rubbish_id: 7}),
        knex('rubbish').insert({name: 'tin can', rubbish_id: 8}),
        knex('rubbish').insert({name: 'cloth nappy', rubbish_id: 9}),
        knex('rubbish').insert({name: 'coffee cup', rubbish_id: 10}),
        knex('rubbish').insert({name: 'plastic', rubbish_id: 11}),
        knex('rubbish').insert({name: 'dust', rubbish_id: 12})
      ]);
    });
};
