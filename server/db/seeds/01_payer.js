exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('payer').del().then(function() {
    // Inserts seed entries
    return knex('payer').insert([
      {
        "PAYERID": 1,
        "PAYERNAME": "Aetna"
      }, {
        "PAYERID": 2,
        "PAYERNAME": "BCBS"
      }, {
        "PAYERID": 3,
        "PAYERNAME": "AMERIHEALTH CARITAS PA"
      }, {
        "PAYERID": 4,
        "PAYERNAME": "MEDICARE"
      }, {
        "PAYERID": 5,
        "PAYERNAME": "HIGHMARK PA"
      }, {
        "PAYERID": 6,
        "PAYERNAME": "PEOPLE'S HEALTH"
      }, {
        "PAYERID": 7,
        "PAYERNAME": "CVS HEALTH"
      }, {
        "PAYERID": 8,
        "PAYERNAME": "CIGNA"
      }, {
        "PAYERID": 9,
        "PAYERNAME": "DELTA HEALTH SYSTEM"
      }, {
        "PAYERID": 10,
        "PAYERNAME": "BLUECARE"
      }
    ]);
  });
};
