import { Hero } from './../models/hero.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {

  @Input() hero?: Hero;

}
