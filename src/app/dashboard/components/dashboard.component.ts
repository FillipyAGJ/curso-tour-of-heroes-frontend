import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: heroes => this.heroes = heroes.slice(0, 5),
      error: err => console.log(err)
    })
  }

}
