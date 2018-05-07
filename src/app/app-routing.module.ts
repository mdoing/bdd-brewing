import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'beer',
    component: BeerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
