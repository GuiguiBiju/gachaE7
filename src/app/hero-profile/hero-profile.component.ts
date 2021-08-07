import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS, OWNED } from '../bdd/herobdd';
import { Hero } from '../modeles/hero';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit {

  heroList = HEROS;
  heroOwned = OWNED;
  hero:Hero = new Hero;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];

    this.heroList = HEROS;
    this.heroOwned = OWNED;

    for(let i = 0; i< this.heroOwned.length; i++){
      if(this.heroOwned[i].name == name){
        this.hero = this.heroOwned[i];
      }
    }
  }

}
