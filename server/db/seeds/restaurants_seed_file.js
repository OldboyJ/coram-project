
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { user_id: 1,
          restaurant_name: 'fired pie',
          location: 'avondale, az',
          date_visited: '01/22/2016',
          review: 'I enjoy the atmosphere and speedy service',
          visited: true
        },
        { user_id: 2,
          restaurant_name: 'the habit',
          location: 'tempe, az',
          date_visited: '04/19/2016',
          review: 'Tasty hamburger, didnt disappoint',
          visited: true
        },
        { user_id: 3,
          restaurant_name: 'McDonalds',
          location: 'phoenix, az',
          visited: false
        }
      ]);
    });
};
