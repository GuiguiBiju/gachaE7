import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS, OWNED } from '../bdd/herobdd';
import { Hero } from '../modeles/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

heroList = HEROS;
heroOwned = OWNED;
seed: number = 0;
summons:number = 10;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.heroList = HEROS;
    this.heroOwned = OWNED;
  }

  summonHero(){

    if(this.summons > 0)
    {
      this.seed = Math.floor(Math.random() * HEROS.length) + 1; //random generation number for hero gacha

      for(var i = 0; i < HEROS.length; i++){
        if(this.seed == this.heroList[i].id){

          //this.heroOwned.push(this.heroList[i]); // on ajoute les heros a la liste
          OWNED.push(this.heroList[i]);

          console.log("congratulation, you obtain " + this.heroList[i].name)
          console.log(this.seed)
          console.log(this.heroOwned);

        }
      }
      this.summons--;
    }
    else{
      console.log("tou dont have any summons left");
    }

  }

reroll(){
  //this.heroOwned.slice(0,10);
  //this.summons=10;
  location.reload();
  //let link = ['']
  //this.router.navigate(link);
}


}
