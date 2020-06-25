import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { PageJoueurComponent } from './page-joueur/page-joueur.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


const routes: Routes = [  
  { path: 'accueil', component: PageHomeComponent },
  { path: 'joueurs', component: PageJoueurComponent },
  { path: 'jeu', component: PageJeuComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PageJoueurComponent,
    PageHomeComponent,
    PageJeuComponent 
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
