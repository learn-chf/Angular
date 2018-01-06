import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost:2403/heroes-v2';

    constructor(private httpClient: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
      return this.httpClient.get<Hero[]>(this.heroesUrl);
    }

    getHeroById(id: string): Observable<Hero> {
      return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`);
    }

    getTopHeroes(): Observable<Hero[]> {
      // 请参考Deployd的API文档
      return this.httpClient.get<Hero[]>(`${this.heroesUrl}?isTop=true`);
    }

    addHero(hero: Hero): Observable<Hero> {
      return this.httpClient.post<Hero>(this.heroesUrl, hero);
    }

    deleteHero(id: string): Observable<any> {
      return this.httpClient.delete(`${this.heroesUrl}/${id}`);
    }

    updateHero(hero: Hero): Observable<Hero> {
      return this.httpClient.put<Hero>(this.heroesUrl, hero);
    }
}