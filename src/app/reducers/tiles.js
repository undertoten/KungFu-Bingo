import allMilestones from '../base-data/base-table';
import seedRandom from 'seedrandom';

import { COMPLETE_MILESTONE,
  UNDO_MILESTONE,
  GENERATE_RANDOM_SEED,
  APPLY_SEED
} from '../actions';

const initialSeed = seedRandom(Math.ceil(9999999 * Math.random()));
const initialMilestones = scramble(allMilestones);


const initialState = {
  tiles: initialMilestones,
  seed: initialSeed()
};

export default function tiles(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_MILESTONE:
      return Object.assign({}, state, {
        id: action.id
      });
    case UNDO_MILESTONE:
      return Object.assign({}, state, {
        id: action.id
      });
    case GENERATE_RANDOM_SEED:
      return Object.assign({}, state, {
        seed: (99999999 * Math.random())
      });
    case APPLY_SEED:
      return Object.assign({}, state, {
        seed: action.seed
      });
    default:
      return state;
  }
}

function scramble(milestones) {
  return allMilestones;
}

function populate(seed) {
  if (seed === null) {
    seed = Math.ceil(9999999 * Math.random());
  }
  let rng = seed;
  let template = this.props.data.tiles;
  let newBoard = [];
  let selectedMilestone;

  template.map(() => {
    selectedMilestone = template[Math.floor(template.length * rng)];
    selectedMilestone.complete = false;
    newBoard.push(selectedMilestone);
    template = template.filter((elem) => {
      if (template.length > 1) {
        return elem !== selectedMilestone;
      } else {
        return elem;
      }
    });
  });
}
