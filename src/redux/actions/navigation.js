import { PERSIST_DERIVED_VALUE } from "../types";

export function persistDerivedValue(payload) {
  return {
    type: PERSIST_DERIVED_VALUE,
    payload,
  };
}
