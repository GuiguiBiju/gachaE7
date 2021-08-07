import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroeditComponent } from './heroedit/heroedit.component';
import { HomeComponent } from './home/home.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { TeameditComponent } from './teamedit/teamedit.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'myteam',
    component:MyTeamComponent
  },
  {
    path: 'teamedit',
    component:TeameditComponent
  },
  {
    path: 'heroedit/:name',
    component:HeroeditComponent
  },
  {
    path: 'heroProfile/:name',
    component:HeroProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
