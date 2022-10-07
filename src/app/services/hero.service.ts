import { MessageService } from './message.service';
import { HEROES } from './../mock/mock-heroes';
import { Hero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // o of() transforma uma lista recebida em um observable
    const Heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return Heroes
  }
}
