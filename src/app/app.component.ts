import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBDLBV2JTD4Xgc67G14-v7HlBbo5V1sWZ4",
      authDomain: "ng-recipe-book-e6374.firebaseapp.com",
    })
  }
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
