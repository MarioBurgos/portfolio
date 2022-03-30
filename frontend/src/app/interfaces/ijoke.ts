export interface Ijoke {
  id: string;
  joke: string;
  value: string;
  status: number;
  rank: number;

  setRank(n:number):void;
}
