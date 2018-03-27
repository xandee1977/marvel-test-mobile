import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';
import { DetailPage } from '../../pages/detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private page = 0;
  private list = [];

  constructor(
  	public navCtrl: NavController,
  	private marvel: MarvelProvider
  ) {
	this.getData();
  }

  getData() {
  	this.marvel.getData(this.page)
  		.then((response) => {
  			if ( response.status === 200 ) {
  				let body = JSON.parse(response._body);
  				let newList = this.list.splice(0);
  				
  				for(let i in body.data.results) {
  					newList.push(body.data.results[i]);
  				}

  				this.list = newList;
  			}
  		})
  		.catch((error) => {
  			console.log(error);
  		});
  }

  // Retrieve Movie Detail Page
  charDetail( character ) {
    this.navCtrl.push(
      DetailPage, { 
        'character': character 
      }
    );
  }

  // Retrieve nex page of registers (loop)
  nextPage( infiniteScroll ) {
    console.log('Next Page');

    setTimeout(() => {
      this.page=this.page+10;
      this.getData();      
      infiniteScroll.complete();
    }, 500);

  }
}
