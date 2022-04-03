import { Injectable } from '@angular/core';
import { Ijoke } from '../interfaces/ijoke';
import { Joke } from '../model/joke';

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
  public getRanking(): Array<Ijoke>{
    return this.rankingJokes;
   }
  parametrizeJoke(joke: Ijoke): Ijoke {
    console.warn('parametrize', joke)
    let j= new Joke();
      j.id = joke.id;
    j.joke = joke.joke;
    j.value = joke.value;
    this._joke = j;
    this.rankingJokes.push(j);
    return j;
   }
  rankJoke(points: number) {
      let j = this.rankingJokes.find(element => element.id == this._joke.id)
    console.log('service', j);
    j?.setRank(points);
    this.rankingJokes.sort((a,b) => a.rank - b.rank)
   }
}
