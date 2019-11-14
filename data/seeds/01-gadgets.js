
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gadgets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('gadgets').insert([
        {name: "ipad pro", manufacturer: 'apple'},
        {name: "ipod mini", manufacturer: 'apple'},
        {name: "macbook pro", manufacturer: 'apple'}
      ]);
    });
};
