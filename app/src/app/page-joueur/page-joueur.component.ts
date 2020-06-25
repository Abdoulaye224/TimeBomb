import { JoueurService } from './../joueur.service';
import { Joueur } from './../joueur';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-joueur',
  templateUrl: './page-joueur.component.html',
  styleUrls: ['./page-joueur.component.css']
})
export class PageJoueurComponent implements OnInit {

  JoueurForm: Joueur = new Joueur();

  constructor(public srvJoueur: JoueurService) { }

  ngOnInit() {
  }

  public ajouterJoueur(){
    this.srvJoueur.ajouterJoueur(this.JoueurForm);
    this.JoueurForm = new Joueur();
  }

}
