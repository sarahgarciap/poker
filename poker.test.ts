import { describe, expect, it } from "vitest";
import { checkHand } from "./poker";

describe("checkHand", () => {

  it("should give one point for a pair", () => {
    const hand = [
      { rank: 2, suit: "hearts" },
      { rank: 2, suit: "spades" },
      { rank: 5, suit: "clubs" },
      { rank: 8, suit: "diamonds" },
      { rank: 11, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(1);
  });
});
