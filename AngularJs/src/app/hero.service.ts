import { Http } from '@angular/http';
// import { HEROES } from './mock-hero';
import { Hero } from './Hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  private url = 'http://127.0.0.1:2403/heroes';
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(this.url)
      .toPromise()
      .then(res => res.json() as Hero[])
      .catch();
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: string): Promise<Hero> {
    // return this.getHeroes()
    //            .then(heroes => heroes.find(hero => hero.id === id));
    const urlById = `${this.url}/${id}`;
    return this.http.get(urlById)
      .toPromise()
      .then(res => res.json() as Hero)
      .catch();
  }

  update(hero: Hero): Promise<Hero> {
    const urlUpdate = `${this.url}/${hero.id}`;
    return this.http.put(urlUpdate, hero)
      .toPromise()
      .then(res => res.json() as Hero)
      .catch();
  }

  delete(id: string): Promise<void> {
    const deleteUrl = `${this.url}/${id}`;
    return this.http.delete(deleteUrl)
      .toPromise()
      .then(() => null)
      .catch();
  }

  create(n: string): Promise<Hero> {
    return this.http
      .post(this.url, {no: '98', name: n})
      .toPromise()
      .then(res => res.json() as Hero)
      .catch();
  }

}
