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

  const pairCounts = Array.from(rankCounts.values()).filter((count) => count >= 2).length;

  
  if (pairCounts >= 2) {
    return 2;
  }

  return pairCounts === 1 ? 1 : 0;
}
