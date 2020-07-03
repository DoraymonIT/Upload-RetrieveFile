import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreateCommandeComponent} from './create-commande/create-commande.component';
import { CommandesAllComponent} from './commandes-all/commandes-all.component';
import { ProfileComponent } from './profile/profile.component';
import { CommandeDetaillesComponent } from './commande-detailles/commande-detailles.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCommandeComponent,
    CommandesAllComponent,
    ProfileComponent,
    CommandeDetaillesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
