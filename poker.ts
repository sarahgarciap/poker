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

  const rankFrequencies = Array.from(rankCounts.values());
  const hasThreeOfAKind = rankFrequencies.some((count) => count === 3);

  if (hasThreeOfAKind) {
    return 30;
  }

  return Math.max(...hand.map((card) => card.rank));
}
