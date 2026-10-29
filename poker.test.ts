import { describe, expect, it } from "vitest";
import { checkHand } from "./poker";

describe("checkHand", () => {

  it("returns the highest card within hand if only a pair is present", () => {
    const hand = [
      { rank: 2, suit: "hearts" },
      { rank: 2, suit: "spades" },
      { rank: 5, suit: "clubs" },
      { rank: 8, suit: "diamonds" },
      { rank: 11, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(11);
  });

  it("returns the highest card within hand if two pairs are present", () => {
    const hand = [
      { rank: 2, suit: "hearts" },
      { rank: 2, suit: "spades" },
      { rank: 5, suit: "clubs" },
      { rank: 5, suit: "diamonds" },
      { rank: 11, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(11);
  });

  it("returns thirty points for three of a kind within the hand", () => {
    const hand = [
      { rank: 3, suit: "hearts" },
      { rank: 3, suit: "spades" },
      { rank: 3, suit: "diamonds" },
      { rank: 8, suit: "clubs" },
      { rank: 11, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(30);
  });
});
