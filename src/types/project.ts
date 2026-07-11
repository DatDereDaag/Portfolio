export type CardType = "mobile" | "desktop";

export interface Project {
  id: string;
  title: string;
  cardType: CardType;
  bullets: string[];
  tags: string[];
  cardImages: string[];
  githubURL: string;
  demoURL: string;
}
