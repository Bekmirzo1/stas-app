import type { ReactionObj, reactVal } from "./types";

export function reactToggle(reaction: Ref<reactVal>, reaction2: Ref<reactVal>) {
  if (reaction.value == 0) {
    reaction.value++;
    if (reaction2.value == 1) {
      reaction2.value--;
    }
  } else if (reaction.value == 1) {
    reaction.value--;
  }
}

export const reactionsArray: ReactionObj[] = [
  { class: "like", value: "like" },
  { class: "dislike", value: "trash" },
];
