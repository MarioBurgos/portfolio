import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ijoke } from '../interfaces/ijoke';

@Injectable({
    providedIn: 'root'
})
export class ChuckJokeService {

  url = 'https://api.chucknorris.io/jokes/random';
  options = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  constructor(private _http: HttpClient) {}

  getJoke(): Observable<Ijoke> {
    return this._http.get<Ijoke>(this.url, this.options);
  }
}
