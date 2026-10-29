export type Suit = "hearts" | "diamonds" | "clubs" | "spades";

export interface Card {
  rank: number;
  suit: Suit;
}

export type PokerHand = readonly Card[];

function hasStraight(ranks: readonly number[]): boolean {
  const sortedRanks = [...ranks].sort((left, right) => left - right);

  return (
    sortedRanks.length === 5 &&
    sortedRanks.every(
      (rank, index) => index === 0 || rank === sortedRanks[index - 1] + 1,
    )
  );
}

export function checkHand(hand: PokerHand): number {
  const rankCounts = new Map<number, number>();

  for (const card of hand) {
    const count = rankCounts.get(card.rank) ?? 0;
    rankCounts.set(card.rank, count + 1);
  }

  const rankFrequencies = Array.from(rankCounts.values());
  const hasFourOfAKind = rankFrequencies.includes(4);

  const isAFullHouse =
    rankFrequencies.includes(3) && rankFrequencies.includes(2);
  const hasThreeOfAKind = rankFrequencies.some((count) => count === 3);
  const isAFlush = hand.every((card) => card.suit === hand[0].suit);
  const isAStraight = hasStraight(hand.map((card) => card.rank));

  if (isAFlush && isAStraight) {
    return 80;
  }

  if (hasFourOfAKind) {
    return 60;
  }

  if (isAFullHouse) {
    return 50;
  }

  if (hasThreeOfAKind) {
    return 30;
  }

  if (isAFlush) {
    return 45;
  }

  if (isAStraight) {
    return 40;
  }

  return Math.max(...hand.map((card) => card.rank));
}

export function calculateTotalScore(hands: readonly PokerHand[]): number {
  return hands.reduce((total, hand) => total + checkHand(hand), 0);
}
