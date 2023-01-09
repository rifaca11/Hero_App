import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  hero ={
    name:'',
    power:0,
    image:''
  }
  heros :any[] = [];

  ajout(){
    this.heros.push(this.hero);
    this.hero ={
      name:'',
      power:0,
      image:''
    }
    console.log(this.heros);
  }
  constructor() {}
  ngOnInit(): void{}
}
