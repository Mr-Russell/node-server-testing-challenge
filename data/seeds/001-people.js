
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          name: "Aang",
          birthplace: "Air Temple"
        },
        {
          name: "Katara",
          birthplace: "Water Tribe"
        },
        {
          name: "Sokka",
          birthplace: "Water Tribe"
        },
        {
          name: "Toph",
          birthplace: "Earth Kingdom"
        },
      ]);
    });
};
