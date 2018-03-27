import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {  
  LoadingController
} from 'ionic-angular';

@Injectable()
export class MarvelProvider {
  // Base WS Url
  private base_url:String = 'https://gateway.marvel.com/v1/public/characters';
  private apikey:String = '556eba49bd87adab61a03e494def7afd';

  constructor(
    public   http: Http,
    public   loadingCtrl: LoadingController
  ) {
  }

  // Get the data from service
  getData(page=0, perpage=10):Promise<any> {
    let url = this.base_url + '?apikey=' + this.apikey;
    url += '&offset=' + page + '&limit=' + perpage; 

    return this.http.get(url)
    .toPromise();
  }
}