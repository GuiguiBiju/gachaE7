import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS, OWNED, TEAM } from '../bdd/herobdd';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {

  heroList = HEROS;
  heroOwned = OWNED;
  Teamcomp = TEAM;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.heroList = HEROS;
    this.heroOwned = OWNED;
    this.Teamcomp = TEAM;
  }

}
