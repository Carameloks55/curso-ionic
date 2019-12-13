import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseUrl: string = "https://api.themoviedb.org/3/movie/";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  public getLatestMovie() {

   return this.getMovie("latest");
  }

  public getPopularMovie(){
    return this.getMovie("popular");
  }

  public getMovie(url : string){
    return this.http.get(this.baseUrl + url + this.getApiKey());
  }

  private getApiKey(): string {
    return "?api_key=efdf15f79c3c860981b9684239b7e668";
  }
}
