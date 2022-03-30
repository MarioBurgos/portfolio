import { Injectable } from '@angular/core';
import { Ijoke } from '../interfaces/ijoke';
import { ChuckJoke } from '../model/chuck-joke';
import { DadJoke } from '../model/dad-joke';

@Injectable({
  providedIn: 'root'
})
export class RankingJokesService {

  private _joke!: Ijoke;
  rankingJokes: Array<Ijoke> = [];

  constructor() { }

 public getJoke(): Ijoke {
    return this._joke;
  }
  public seTJoke(value: Ijoke) {
    this._joke = value;
  }
  parametrizeJoke(joke: Ijoke): Ijoke {
    let j;
    if (joke.value === undefined) {
      j = new DadJoke();
      j.id = joke.id;
      j.joke = joke.joke;


    } else {
      j = new ChuckJoke();
      j.id = joke.id;
      j.value = joke.value;

    }
    return j;
   }
  rankJoke(points: number) {
    this.rankingJokes.push(this._joke);

      let j = this.rankingJokes.find(element => element.id === this._joke.id)
    console.log('service', j);
    j?.setRank(points);

    this.rankingJokes.sort((a,b) => a.rank - b.rank)
   }
}
