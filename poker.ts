export type Suit = "hearts" | "diamonds" | "clubs" | "spades";

export interface Card {
  rank: number;
  suit: Suit;
}

export type PokerHand = readonly Card[];

export function checkHand(hand: PokerHand): number {
  const rankCounts = new Map<number, number>();

  for (const card of hand) {
    const count = rankCounts.get(card.rank) ?? 0;
    rankCounts.set(card.rank, count + 1);
  }

  const hasPair = Array.from(rankCounts.values()).some((count) => count >= 2);

  return hasPair ? 1 : 0;
}
