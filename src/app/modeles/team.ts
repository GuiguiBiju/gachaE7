import { Hero } from "./hero";

export class Team {

  front: any;
  top: any;
  bot: any;
  rear: any;

  constructor(
  front: any ='',
  top: any='',
  bot: any='',
  rear: any='',

  ){
    this.front = front;
    this.top = top;
    this.bot = bot;
    this.rear = rear;

  }

}
