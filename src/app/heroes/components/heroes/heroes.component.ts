import { HeroService } from '../../../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name']
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes) => this.heroes = heroes,
      error: (err) => console.log(err)
    });
  }
}
