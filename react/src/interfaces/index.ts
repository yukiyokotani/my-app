export type Show = {
  id: number;
  url: string;
  name: string;
};

export type Entry = {
  score: number;
  show: Show;
};
