import { Ijoke } from "../interfaces/ijoke";

export class ChuckJoke implements Ijoke {
  id: string;
  joke: string;
  value: string;
  status: number;
  rank: number;

  constructor() {
     this.id = '';
     this.joke = '';
     this.value = '';
    this.status = -1;
    this.rank = 0;
  }
  setRank(n: number): void {
    this.rank += n;
  }
}
