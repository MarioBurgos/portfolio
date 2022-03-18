import { Ijoke } from "../interfaces/ijoke";

export class DadJoke implements Ijoke {
  id: string;
  joke: string;
  value: string;
  status: number;

  constructor() {
    this.id = '';
    this.joke = '';
    this.value = '';
    this.status = -1;
  }

}
