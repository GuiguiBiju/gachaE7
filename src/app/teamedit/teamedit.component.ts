import { Team } from './../modeles/team';
import { TEAM } from './../bdd/herobdd';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS, OWNED } from '../bdd/herobdd';
import { Hero } from '../modeles/hero';

@Component({
  selector: 'app-teamedit',
  templateUrl: './teamedit.component.html',
  styleUrls: ['./teamedit.component.scss']
})
export class TeameditComponent implements OnInit {

  heroList = HEROS;
  heroOwned = OWNED;
  Teamcomp = TEAM;
  team:Team = new Team;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.heroList = HEROS;
    this.heroOwned = OWNED;
    this.Teamcomp = TEAM;
  }

  addtoteam(hero:Hero){
    if(this.team.front==''){
      this.team.front = hero;
    }
    else if (this.team.top==''){
      if(hero!= this.team.front){
        this.team.top = hero;
      }
      else{}

    }else if (this.team.bot==''){
      if(hero != this.team.front && hero != this.team.top){
        this.team.bot = hero;
      }
      else{}

    }else if (this.team.rear==''){
      if(hero != this.team.front && hero != this.team.top && hero != this.team.bot){
        this.team.rear = hero;
      }
      else{}
    }
    //this.Teamcomp = this.team;
    TEAM.front = this.team.front;
    TEAM.top = this.team.top;
    TEAM.bot = this.team.bot;
    TEAM.rear = this.team.rear;
  }






}
