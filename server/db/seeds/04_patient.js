exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patient').del().then(function() {
    // Inserts seed entries
    return knex('patient').insert([
      {
        "PATIENTID": "PIF-01000001",
        "FIRSTNAME": "HORACET",
        "LASTNAME": "TOWE",
        "REFERRALSRC": "HOFFMANN HOSPICE BAKERSFIELD CA",
        "PRIMPLAN": "Aetna Plan A",
        "DEDMET": 0,
        "DEDMEFORYEAR": 827,
        "OOPMAXTODATE": 827,
        "OOPMET": 0,
        "PRIMARYPLANID": 1
      }, {
        "PATIENTID": "PIF-01000002",
        "FIRSTNAME": "DEON",
        "LASTNAME": "PICKERING",
        "REFERRALSRC": "HOFFMANN HOSPICE BAKERSFIELD CA",
        "PRIMPLAN": "Aetna Plan B",
        "DEDMET": 0,
        "DEDMEFORYEAR": 419,
        "OOPMAXTODATE": 419,
        "OOPMET": -1,
        "PRIMARYPLANID": 2
      }, {
        "PATIENTID": "PIF-01000003",
        "FIRSTNAME": "BOBBIE",
        "LASTNAME": "BASSHAM",
        "REFERRALSRC": "UNIVERSITY OF MICHIGAN HOSPITAL ANN ARBOR MI",
        "PRIMPLAN": "Blue Choice",
        "DEDMET": -1,
        "DEDMEFORYEAR": 124,
        "OOPMAXTODATE": 124,
        "OOPMET": 0,
        "PRIMARYPLANID": 3
      }, {
        "PATIENTID": "PIF-01000004",
        "FIRSTNAME": "NOBLE",
        "LASTNAME": "JACOBS",
        "REFERRALSRC": "UNIVERSITY OF MICHIGAN HOSPITAL ANN ARBOR MI",
        "PRIMPLAN": "Blue Choice 100",
        "DEDMET": 0,
        "DEDMEFORYEAR": 4096,
        "OOPMAXTODATE": 4096,
        "OOPMET": -1,
        "PRIMARYPLANID": 4
      }, {
        "PATIENTID": "PIF-01000005",
        "FIRSTNAME": "WILFORD",
        "LASTNAME": "NAY",
        "REFERRALSRC": "UNIVERSITY OF MICHIGAN HOSPITAL ANN ARBOR MI",
        "PRIMPLAN": "Amerihealth Gold",
        "DEDMET": -1,
        "DEDMEFORYEAR": 909,
        "OOPMAXTODATE": 909,
        "OOPMET": 0,
        "PRIMARYPLANID": 5
      }, {
        "PATIENTID": "PIF-01000006",
        "FIRSTNAME": "DOMENIC",
        "LASTNAME": "VARGA",
        "REFERRALSRC": "MASS GENERAL / NORTH SHORE CA CT",
        "PRIMPLAN": "Amerihealth Silver",
        "DEDMET": 0,
        "DEDMEFORYEAR": 841,
        "OOPMAXTODATE": 841,
        "OOPMET": -1,
        "PRIMARYPLANID": 6
      }, {
        "PATIENTID": "PIF-01000007",
        "FIRSTNAME": "ELMO",
        "LASTNAME": "STEJSKAL",
        "REFERRALSRC": "MASS GENERAL / NORTH SHORE CA CT",
        "PRIMPLAN": "Amerihealth Bronze",
        "DEDMET": 0,
        "DEDMEFORYEAR": 1461,
        "OOPMAXTODATE": 1461,
        "OOPMET": 0,
        "PRIMARYPLANID": 7
      }, {
        "PATIENTID": "PIF-01000008",
        "FIRSTNAME": "BARRY",
        "LASTNAME": "BOULEY",
        "REFERRALSRC": "HOFFMANN HOSPICE BAKERSFIELD CA",
        "PRIMPLAN": "Traditional",
        "DEDMET": 0,
        "DEDMEFORYEAR": 250,
        "OOPMAXTODATE": 250,
        "OOPMET": 0,
        "PRIMARYPLANID": 8
      }, {
        "PATIENTID": "PIF-01000009",
        "FIRSTNAME": "WES",
        "LASTNAME": "MCGILL",
        "REFERRALSRC": "HOFFMANN HOSPICE BAKERSFIELD CA",
        "PRIMPLAN": "HMO",
        "DEDMET": 0,
        "DEDMEFORYEAR": 4047,
        "OOPMAXTODATE": 4047,
        "OOPMET": -1,
        "PRIMARYPLANID": 9
      }, {
        "PATIENTID": "PIF-01000010",
        "FIRSTNAME": "JOAN",
        "LASTNAME": "HULING",
        "REFERRALSRC": "HOFFMANN HOSPICE BAKERSFIELD CA",
        "PRIMPLAN": "Highmark Plan A",
        "DEDMET": -1,
        "DEDMEFORYEAR": 1500,
        "OOPMAXTODATE": 6765,
        "OOPMET": 0,
        "PRIMARYPLANID": 10
      }, {
        "PATIENTID": "PIF-01000011",
        "FIRSTNAME": "ALEXANDER",
        "LASTNAME": "HULTGREN",
        "REFERRALSRC": "HOFFMANN HOSPICE BAKERSFIELD CA",
        "PRIMPLAN": "Highmark Plan B",
        "DEDMET": 0,
        "DEDMEFORYEAR": 467,
        "OOPMAXTODATE": 467,
        "OOPMET": 0,
        "PRIMARYPLANID": 11
      }, {
        "PATIENTID": "PIF-01000012",
        "FIRSTNAME": "JEREMY",
        "LASTNAME": "RIFE",
        "REFERRALSRC": "ST LUKES HOSPITAL ALLENTOWN PA",
        "PRIMPLAN": "Person Plan 1",
        "DEDMET": 0,
        "DEDMEFORYEAR": 2,
        "OOPMAXTODATE": 2,
        "OOPMET": -1,
        "PRIMARYPLANID": 12
      }, {
        "PATIENTID": "PIF-01000013",
        "FIRSTNAME": "HENRY",
        "LASTNAME": "FARNUM",
        "REFERRALSRC": "FIRELANDS REG MEDICAL CTR HAYES AVE SANDUSKY OH",
        "PRIMPLAN": "Person Plan 2",
        "DEDMET": -1,
        "DEDMEFORYEAR": 1719,
        "OOPMAXTODATE": 1719,
        "OOPMET": 0,
        "PRIMARYPLANID": 13
      }, {
        "PATIENTID": "PIF-01000014",
        "FIRSTNAME": "ALEXA",
        "LASTNAME": "OYAMA",
        "REFERRALSRC": "FIRELANDS REG MEDICAL CTR HAYES AVE SANDUSKY OH",
        "PRIMPLAN": "Prime Plan",
        "DEDMET": 0,
        "DEDMEFORYEAR": 341,
        "OOPMAXTODATE": 341,
        "OOPMET": 0,
        "PRIMARYPLANID": 14
      }, {
        "PATIENTID": "PIF-01000015",
        "FIRSTNAME": "NEVILLE",
        "LASTNAME": "CENTERS",
        "REFERRALSRC": "FIRELANDS REG MEDICAL CTR HAYES AVE SANDUSKY OH",
        "PRIMPLAN": "Choice Plan",
        "DEDMET": -1,
        "DEDMEFORYEAR": 4626,
        "OOPMAXTODATE": 4626,
        "OOPMET": -1,
        "PRIMARYPLANID": 15
      }, {
        "PATIENTID": "PIF-01000016",
        "FIRSTNAME": "CLINT",
        "LASTNAME": "MECHAM",
        "REFERRALSRC": "MEMORIAL HOSPITAL WEST PEMBROKE PINES FL",
        "PRIMPLAN": "HMO",
        "DEDMET": 0,
        "DEDMEFORYEAR": 1853,
        "OOPMAXTODATE": 1853,
        "OOPMET": -1,
        "PRIMARYPLANID": 16
      }, {
        "PATIENTID": "PIF-01000017",
        "FIRSTNAME": "DIEGO",
        "LASTNAME": "BENNET",
        "REFERRALSRC": "ST ELIZABETH HEALTHCARE EDGEWOOD KY",
        "PRIMPLAN": "PPO",
        "DEDMET": 0,
        "DEDMEFORYEAR": 689,
        "OOPMAXTODATE": 689,
        "OOPMET": 0,
        "PRIMARYPLANID": 17
      }, {
        "PATIENTID": "PIF-01000018",
        "FIRSTNAME": "ROBT",
        "LASTNAME": "ROBBINS",
        "REFERRALSRC": "SLIDELL MEMORIAL HOSPITAL SLIDELL LA",
        "PRIMPLAN": "Delta Plan A",
        "DEDMET": -1,
        "DEDMEFORYEAR": 212,
        "OOPMAXTODATE": 212,
        "OOPMET": -1,
        "PRIMARYPLANID": 18
      }, {
        "PATIENTID": "PIF-01000019",
        "FIRSTNAME": "SEAN",
        "LASTNAME": "HARDENS",
        "REFERRALSRC": "SLIDELL MEMORIAL HOSPITAL SLIDELL LA",
        "PRIMPLAN": "Delta Plan B",
        "DEDMET": 0,
        "DEDMEFORYEAR": 1173,
        "OOPMAXTODATE": 1173,
        "OOPMET": 0,
        "PRIMARYPLANID": 19
      }, {
        "PATIENTID": "PIF-01000020",
        "FIRSTNAME": "NATHAN",
        "LASTNAME": "HUDMENT",
        "REFERRALSRC": "BAYLOR SCOTT WHITE MEDICAL CTR COLL STATION TX",
        "PRIMPLAN": "Delta Plan C",
        "DEDMET": -1,
        "DEDMEFORYEAR": 3242,
        "OOPMAXTODATE": 3242,
        "OOPMET": -1,
        "PRIMARYPLANID": 20
      }, {
        "PATIENTID": "PIF-012345687",
        "FIRSTNAME": "John",
        "LASTNAME": "Doe",
        "REFERRALSRC": "SOMEWHERE OVER THE VIAGRA FALLS",
        "PRIMPLAN": "Unity Plan B",
        "DEDMET": 0,
        "DEDMEFORYEAR": 0,
        "OOPMAXTODATE": 0,
        "OOPMET": 0,
        "PRIMARYPLANID": 8
      }, {
        "PATIENTID": "PIF-78920384",
        "FIRSTNAME": "John",
        "LASTNAME": "Smith",
        "REFERRALSRC": "Dr. Jones",
        "PRIMPLAN": "Delta Silver",
        "DEDMET": -1,
        "DEDMEFORYEAR": 1500,
        "OOPMAXTODATE": 750,
        "OOPMET": 0,
        "PRIMARYPLANID": 8
      }
    ]);
  });
};
