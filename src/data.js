/* eslint-disable */

const data = {
  "Characters": [
    "Mario",
    "Yoshi",
    "Peach",
    "Toad",
    "Luigi",
    "Donkey Kong",
    "Wario",
    "Bowser"
  ],

  "Tracks": {
    "Mushroom Cup": [
      "Luigi Raceway",
      "Moo Moo Farm",
      "Koopa Troopa Beach",
      "Kalimari Desert"
    ],
    "Flower Cup": [
      "Toad's Turnpike",
      "Frappe Snowland",
      "Choco Mountain",
      "Mario Raceway"
    ],
    "Star Cup": [
      "Wario Stadium",
      "Sherbet Land",
      "Royal Raceway",
      "Bowser's Castle"
    ],
    "Special Cup": [
      "DK's Jungle Parkway",
      "Yoshi Valley",
      "Banshee Boardwalk",
      "Rainbow Road"
    ]
  },

  "Heats": {

    "8/13/18 5:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Jeff", "Scott", "Charles"]
        },
        {
          "track": "Koopa Troopa Beach",
          "chosen_by": "Scott",
          "placement": ["Charles", "Jeff", "Scott"] 
        },
        {
          "track": "Choco Mountain",
          "chosen_by": "Jeff",
          "placement": ["Scott", "Jeff", "Charles"]
        }
      ]
    },

    "8/14/18 4:00 PM": {
      "championship": true,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Sherbet Land",
          "chosen_by": "Charles",
          "placement": ["Scott", "Jeff", "Charles"]
        },
        {
          "track": "Mario Raceway",
          "chosen_by": "Scott",
          "placement": ["Scott", "Charles", "Jeff"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Charles", "Scott"]
        },
        {
          "track": "Rainbow Road",
          "chosen_by": "championship",
          "placement": ["Jeff", "Scott", "Charles"]
        }
      ]
    },

    "8/16/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy N",
          "character": "Peach"
        },
        {
          "name": "Edwina",
          "character": "Toad"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Charles",
          "character": "Yoshi"
        }
      ],
      "races": [
        {
          "track": "Mario Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Charles", "Scott", "Tommy N", "Edwina"]
        },
        {
          "track": "Moo Moo Farm",
          "chosen_by": "Edwina",
          "placement": ["Scott", "Charles", "Edwina", "Tommy N (DNR)"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Scott",
          "placement": ["Scott", "Charles", "Edwina", "Tommy N (DNR)"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Charles",
          "placement": ["Scott", "Charles", "Edwina", "Tommy N (DNR)"]
        }
      ]
    },

    "8/20/18 2:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy G",
          "character": "Donkey Kong"
        },
        {
          "name": "Jeff",
          "character": "Peach"
        },
        {
          "name": "Tommy N",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Tommy N", "Jeff", "Tommy G"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Tommy G", "Tommy N"]
        },
        {
          "track": "Bowser's Castle",
          "chosen_by": "Tommy N",
          "placement": ["Tommy N", "Tommy G", "Jeff (DQ)"]
        }
      ]
    },

    "8/20/18 4:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy G",
          "character": "Wario"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Scott", "Tommy G", "Charles", "Jeff (DNR)"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Charles", "Scott", "Tommy G", "Jeff (DNR)"]
        },
        {
          "track": "DK's Jungle Parkway",
          "chosen_by": "Charles",
          "placement": ["Tommy G", "Jeff", "Charles", "Scott"]
        },
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Scott", "Jeff", "Charles", "Tommy G"]
        }
      ]
    },

    "8/21/18 3:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Tommy G",
          "character": "Wario"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Charles", "Jeff", "Tommy G", "Scott"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Scott", "Jeff", "Charles", "Tommy G"]
        },
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Jeff", "Scott", "Tommy G", "Charles"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Charles", "Tommy G", "Scott"]
        }
      ]
    },

    "8/22/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Jeff",
          "character": "Peach"
        },
        {
          "name": "Tommy G",
          "character": "Wario"
        },
        {
          "name": "Scott",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Kalimari Desert",
          "chosen_by": "Charles",
          "placement": ["Scott", "Jeff", "Tommy G", "Charles"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Tommy G", "Charles", "Scott"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Scott", "Charles", "Tommy G", "Jeff"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Tommy G",
          "placement": ["Tommy G", "Jeff", "Charles", "Scott"]
        }
      ]
    },

    "8/24/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Jeff",
          "character": "Toad"
        },
        {
          "name": "Tommy G",
          "character": "Wario"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        }
      ],
      "races": [
        {
          "track": "Choco Mountain",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Scott", "Tommy G"]
        },
        {
          "track": "Frappe Snowland",
          "chosen_by": "Tommy G",
          "placement": ["Jeff", "Scott", "Tommy G"]
        },
        {
          "track": "Mario Raceway",
          "chosen_by": "Scott",
          "placement": ["Scott", "Tommy G", "Jeff"]
        }
      ]
    },

    "8/27/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Charles", "Scott", "Jeff"]
        },
        {
          "track": "Frappe Snowland",
          "chosen_by": "Tommy G",
          "placement": ["Scott", "Charles", "Jeff"]
        },
        {
          "track": "Mario Raceway",
          "chosen_by": "Scott",
          "placement": ["Scott", "Jeff", "Charles"]
        }
      ]
    },

    "8/28/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        }
      ],
      "races": [
        {
          "track": "Bowser's Castle",
          "chosen_by": "Charles",
          "placement": ["Scott", "Charles", "Jeff"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Scott", "Charles", "Jeff"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Jeff", "Scott", "Charles"]
        }
      ]
    },

    "8/29/18 3:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Tommy N",
          "character": "Toad"
        },
        {
          "name": "Tommy G",
          "character": "Wario"
        }
      ],
      "races": [
        {
          "track": "DK's Jungle Parkway",
          "chosen_by": "Charles",
          "placement": ["Charles", "Tommy N", "Tommy G", "Scott"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Scott", "Charles", "Tommy N", "Tommy G"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Scott", "Tommy N", "Charles", "Tommy G"]
        },
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Scott", "Charles", "Tommy N", "Tommy G"]
        }
      ]
    },

    "8/30/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy N",
          "character": "Peach"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        },
        {
          "name": "Charles",
          "character": "Yoshi"
        }
      ],
      "races": [
        {
          "track": "Royal Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Scott", "Tommy N", "Jeff", "Charles"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Jeff", "Scott", "Charles", "Tommy N"]
        },
        {
          "track": "Choco Mountain",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Charles", "Scott", "Tommy N"]
        },
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Jeff", "Scott", "Charles", "Tommy N"]
        }
      ]
    },

    "8/31/18 3:00 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy N",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        },
        {
          "name": "Tommy G",
          "character": "Wario"
        }
      ],
      "races": [
        {
          "track": "Royal Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Scott", "Tommy N", "Tommy G", "Jeff"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Scott", "Tommy N", "Jeff", "Tommy G"]
        },
        {
          "track": "Choco Mountain",
          "chosen_by": "Jeff",
          "placement": ["Scott", "Tommy N", "Jeff", "Tommy G"]
        },
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Jeff", "Tommy N", "Tommy G", "Scott"]
        }
      ]
    },

    "9/5/18 3:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy N",
          "character": "Peach"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        },
        {
          "name": "Charles",
          "character": "Yoshi"
        }
      ],
      "races": [
        {
          "track": "Royal Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Jeff", "Scott", "Charles", "Tommy N"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Charles", "Scott", "Tommy N", "Jeff"]
        },
        {
          "track": "Choco Mountain",
          "chosen_by": "Jeff",
          "placement": ["Scott", "Tommy N", "Jeff", "Charles"]
        },
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Scott", "Jeff", "Charles", "Tommy N"]
        }
      ]
    },

    "9/6/18 3:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Tommy G",
          "character": "Wario"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        },
        {
          "name": "Tommy N",
          "character": "Peach"
        }
      ],
      "races": [
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Tommy G",
          "placement": ["Tommy G", "Scott", "Tommy N", "Jeff"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Scott", "Jeff", "Tommy G", "Tommy N"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Scott", "Tommy G", "Tommy N", "Jeff"]
        },
        {
          "track": "Mario Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Jeff", "Tommy N", "Scott", "Tommy G"]
        }
      ]
    },

    "9/7/18 2:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Peach"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Tommy N",
          "character": "Yoshi"
        },
        {
          "name": "Mark",
          "character": "Luigi"
        }
      ],
      "races": [
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Charles", "Scott", "Tommy N", "Mark"]
        },
        {
          "track": "Kalimari Desert",
          "chosen_by": "Scott",
          "placement": ["Scott", "Charles", "Tommy N", "Mark"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Tommy N",
          "placement": ["Charles", "Scott", "Tommy N", "Mark"]
        },
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Mark",
          "placement": ["Scott", "Tommy N", "Charles", "Mark"]
        }
      ]
    },

    "9/7/18 2:30 PM": {
      "championship": true,
      "players": [
        {
          "name": "Charles",
          "character": "Peach"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Tommy N",
          "character": "Yoshi"
        }
      ],
      "races": [
        {
          "track": "Koopa Troopa Beach",
          "chosen_by": "Charles",
          "placement": ["Charles", "Jeff", "Scott"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Charles", "Scott", "Jeff"]
        },
        {
          "track": "Banshee Boardwalk",
          "chosen_by": "Jeff",
          "placement": ["Jeff", "Charles", "Scott"]
        },
        {
          "track": "Rainbow Road",
          "chosen_by": "championship",
          "placement": ["Scott", "Jeff", "Charles"]
        }
      ]
    },

    "9/11/18 2:30 PM": {
      "championship": false,
      "players": [
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Jeff",
          "character": "Peach"
        },
        {
          "name": "Tommy N",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Jeff", "Scott", "Charles", "Tommy N"]
        },
        {
          "track": "Sherbet Land",
          "chosen_by": "Scott",
          "placement": ["Jeff", "Scott", "Charles", "Tommy N"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Tommy N", "Jeff", "Scott", "Charles"]
        },
        {
          "track": "Kalimari Desert",
          "chosen_by": "Tommy N",
          "placement": ["Tommy N", "Charles", "Jeff", "Scott"]
        }
      ]
    },

    "9/12/18 3:00 PM": {
      "championship": true,
      "players": [
        {
          "name": "Scott",
          "character": "Bowser"
        },
        {
          "name": "Charles",
          "character": "Yoshi"
        },
        {
          "name": "Jeff",
          "character": "Toad"
        }
      ],
      "races": [
        {
          "track": "Toad's Turnpike",
          "chosen_by": "Scott",
          "placement": ["Charles", "Jeff", "Scott"]
        },
        {
          "track": "Mario Raceway",
          "chosen_by": "Charles",
          "placement": ["Scott", "Charles", "Jeff"]
        },
        {
          "track": "Royal Raceway",
          "chosen_by": "Jeff",
          "placement": ["Charles", "Scott", "Jeff"]
        },
        {
          "track": "Bowser's Castle",
          "chosen_by": "championship",
          "placement": ["Charles", "Jeff", "Scott"]
        }
      ]
    }
  }
}

export default data;