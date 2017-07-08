
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Alex',
         last_name: 'Bronson',
         email: 'tableauman@gmail.com',
         password: 'ab321'
       },
        {first_name: 'Devon',
         last_name: 'Trustman',
         email: 'campersforlife@gmail.com',
         password: 'gypsy432'
       },
        {first_name: 'Connor',
         last_name: 'McGreggor',
         email: 'cmcgreggor@gmail.com',
         password: 'komayweather123'
       }
      ]);
    });
};
