export class Hero {
  id: number;
  name: string;
  role: string;
  rarity: number;
  hp: number;
  atk: number;
  def: number;
  speed: number;
  element: string;
  picture: string;
  imprint:number;


  constructor(
      id: number = 0,
      name: string = '',
      role: string = '',
      rarity: number = 3,
      hp: number = 0,
      atk: number = 0,
      def: number = 0,
      speed: number = 0,
      element: string = '',
      picture: string = '',
      imprint:number = 0,
  ){
      this.id = id;
      this.name = name;
      this.role = role;
      this.rarity = rarity;
      this.hp = hp;
      this.atk = atk;
      this.def = def;
      this.speed = speed;
      this.element = element;
      this.picture = picture;
      this.imprint = imprint;

  }


}
