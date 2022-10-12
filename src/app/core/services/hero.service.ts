import { MessageService } from './message.service';
import { Hero } from '../models/hero.model';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => this.log(`fetched ${heroes.length} heroes`))
    );

    // o of() transforma uma lista recebida em um observable
    // const Heroes = of(HEROES);
    // this.log('fetched heroes');
    // return Heroes
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
    );
    // const hero = HEROES.find(hero => hero.id === id)!;
    // this.log(`fetched hero id=${id}`)
    // return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }
}
