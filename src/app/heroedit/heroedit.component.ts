import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS, OWNED } from '../bdd/herobdd';
import { Hero } from '../modeles/hero';

@Component({
  selector: 'app-heroedit',
  templateUrl: './heroedit.component.html',
  styleUrls: ['./heroedit.component.scss']
})
export class HeroeditComponent implements OnInit {

  heroList = HEROS;
  heroOwned = OWNED;
  @Input() hero:Hero = new Hero;
  quantity:number = 0;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];

    this.heroList = HEROS;
    this.heroOwned = OWNED;

    for(let i = 0; i< this.heroOwned.length; i++){
      if(this.heroOwned[i].name == name){
        this.hero = this.heroOwned[i];
        this.quantity++;
      }
    }
  }

  onSubmit(f:NgForm){

    let link = ['/heroProfile',this.hero.name]
    this.router.navigate(link);
  }

  imprint(){
    this.quantity--;
    this.hero.imprint++;
    let name = this.route.snapshot.params['name'];

    for(let i = 0; i< this.heroOwned.length; i++){
      if(this.heroOwned[i].name == name){
        OWNED.splice(i,1);
        this.heroOwned = OWNED;
        break;
      }
    }
  }



}
