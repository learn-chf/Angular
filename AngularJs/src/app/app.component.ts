import { HeroService } from './hero.service';
import { Hero } from './Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  isSelected(h: Hero): boolean {
    return h === this.selectedHero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(h => this.heroes = h);
  }
}

