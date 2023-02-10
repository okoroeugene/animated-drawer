import { PERSIST_DERIVED_VALUE } from "../types";

const defaultState = {
  animatedValue: {
    value: 0,
  },
};

export default function navigationReducer(state = defaultState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case PERSIST_DERIVED_VALUE:
      const { animatedValue } = payload;
      return { ...state, animatedValue };
    default:
      return state;
  }
}
