import { Joueur } from './joueur';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  maxAtteint: boolean = false;
  joueurs: Array<Joueur> = new Array<Joueur>();

  taille: Number = 0;

  constructor() { }


  public getPlayersName(selectedVale: Number){
    console.log(selectedVale);

    this.taille = selectedVale;
    return this.taille;
  }

  public ajouterJoueur(joueur: Joueur){
      this.joueurs.push(joueur);
    
      if(this.joueurs.length >=this.taille){
        this.maxAtteint = true;
        console.log('le max est atteint');
      }
    console.log(this.taille);
  }
}
