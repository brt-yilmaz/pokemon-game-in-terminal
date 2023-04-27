const typesMatchup = {
  water: {
    attack: {
      fire: 4,
      ground: 3,
      electric: 1,
      grass: 1,
      water: 1,
    },
    defense: {
      fire: 2,
      ground: 2,
      electric: 0.4,
      grass: 1,
      water: 1,
    },
  },
  fire: {
    attack: {
      water: 0.9,
      ground: 0.4,
      electric: 2,
      grass: 4,
      fire: 1,
    },
    defense: {
      water: 0.6,
      ground: 1,
      electric: 1,
      grass: 3,
      fire: 1,
    },
  },
  electric: {
    attack: {
      water: 5,
      ground: 0.7,
      fire: 1,
      grass: 1,
      electric: 1,
    },
    defense: {
      water: 2,
      ground: 0.9,
      fire: 1,
      grass: 1,
      electric: 1,
    },
  },
  grass: {
    attack: {
      water: 2.5,
      ground: 0.7,
      electric: 1,
      fire: 1,
      grass: 1,
    },
    defense: {
      water: 2,
      ground: 0.9,
      electric: 1,
      fire: 0.5,
      grass: 1,
    },
  },
  ground: {
    attack: {
      water: 1,
      electric: 2.5,
      fire: 2,
      grass: 2.5,
      ground: 1,
    },
    defense: {
      water: 0.3,
      electric: 5,
      fire: 2,
      grass: 2,
      ground: 1,
    },
  },
};

export default typesMatchup;
