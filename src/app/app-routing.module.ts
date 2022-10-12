import { HeroDetailsComponent } from './heroes/components/hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
