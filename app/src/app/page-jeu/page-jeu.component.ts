import { JoueurService } from './../joueur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css']
})
export class PageJeuComponent implements OnInit {

  randomIamges =["bait.jpg", "bomb.jpg", "diffuse.jpg", "back.jpg"];
  num = Math.floor( Math.random() * this.randomIamges.length );
  img = this.randomIamges[ this.num ];
  imgStr: string = "../../assets/" + this.img ;

  constructor(public srvJoueur: JoueurService) { }

  ngOnInit(): void {
  }

  // public getRandomImage(randomIamges, path) {
  //   path = path || '../../assets/'; 
  //   var num = Math.floor( Math.random() * randomIamges.length );
  //   var img = randomIamges[ num ];
  //   var imgStr = '<img src="' + path + img + '" alt = "">';

  //   return imgStr;
  // }

}
