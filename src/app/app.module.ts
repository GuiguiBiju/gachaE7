import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeameditComponent } from './teamedit/teamedit.component';
import { HeroeditComponent } from './heroedit/heroedit.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeameditComponent,
    HeroeditComponent,
    MyTeamComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
