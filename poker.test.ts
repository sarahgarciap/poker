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

  it("returns forty points in total for five ascending cards", () => {
    const hand = [
      { rank: 4, suit: "hearts" },
      { rank: 5, suit: "spades" },
      { rank: 6, suit: "clubs" },
      { rank: 7, suit: "diamonds" },
      { rank: 8, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(40);
  });

  it("returns forty-five points for five cards of the exact same suit", () => {
    const hand = [
      { rank: 2, suit: "hearts" },
      { rank: 7, suit: "hearts" },
      { rank: 9, suit: "hearts" },
      { rank: 11, suit: "hearts" },
      { rank: 13, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(45);
  });

  it("returns fifty points for a full house ;)", () => {
    const hand = [
      { rank: 2, suit: "hearts" },
      { rank: 2, suit: "spades" },
      { rank: 2, suit: "diamonds" },
      { rank: 9, suit: "clubs" },
      { rank: 9, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(50);
  });

  it("returns sixty points for four cards of the same kind", () => {
    const hand = [
      { rank: 9, suit: "hearts" },
      { rank: 9, suit: "spades" },
      { rank: 9, suit: "diamonds" },
      { rank: 9, suit: "clubs" },
      { rank: 11, suit: "hearts" },
    ] as const;

    expect(checkHand(hand)).toBe(60);
  });
});
