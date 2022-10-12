import { HeroesComponent } from './components/heroes/heroes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HeroesRoutingModule,
    FlexLayoutModule
  ]
})
export class HeroesModule { }
