import { JoueurService } from './../joueur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

   selectedValue: Number;

  constructor(private srvJoueur: JoueurService) { }

  ngOnInit(): void {
  }

  public setSelectedValue(){
    this.srvJoueur.getPlayersName(this.selectedValue);
  }

}
