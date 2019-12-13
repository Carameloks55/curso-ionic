import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { b } from '@angular/core/src/render3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public bemvindo:string = 'Bem vindo ao Ionic 4 com Angular!';
  public int:number = 0;
  public boll:Boolean = true;
  public lista:Array<string> = ['Rodrigo', 'Carla', 'Charles', 'Bruno', 'Nairan'];
  public listaAny:Array<any>= ['Teste', 10, true];

  constructor(public navCtrl: NavController) {

  }

 


}
