import { JoueurService } from './../joueur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-jeu',
  templateUrl: './page-jeu.component.html',
  styleUrls: ['./page-jeu.component.css']
})
export class PageJeuComponent implements OnInit {

  constructor(public srvJoueur: JoueurService) { }

  ngOnInit(): void {
  }

}
