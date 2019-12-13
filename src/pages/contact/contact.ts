import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [
    MovieProvider
  ]
})
export class ContactPage {
  

  public contatos: Array<Object> = [];

  constructor(public navCtrl: NavController, public movieProvider: MovieProvider) {
    this.contatos = [
      {
        "nome": "Finn",
        "img": "https://ionicframework.com/docs/demos/api/list/avatar-finn.png",
        "msg": "Eai cara"
      },
      {
        "nome": "Rey",
        "img": "https://ionicframework.com/docs/demos/api/list/avatar-rey.png",
        "msg": "Ola amigos"
      },
      {
        "nome": "Han",
        "img": "https://ionicframework.com/docs/demos/api/list/avatar-han.png",
        "msg": "Eu quero grana"
      }
    ]

  }
  public teste(): void {
    //alert('A função funcionou');
  }

  ionViewDidLoad() {
    //this.teste();
    this.movieProvider.getPopularMovie().subscribe(
      data => {
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        console.log(obj_json);
      }, error => {
        console.log(error);
      }

    )

  }
 
}
