import { HEROES } from './../mock/mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Spider-man'
  } ;

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
