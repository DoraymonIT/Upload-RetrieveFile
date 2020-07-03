import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCommandeComponent} from './create-commande/create-commande.component';
import { CommandesAllComponent} from './commandes-all/commandes-all.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path:'createCommande',
    component: CreateCommandeComponent
  }, {
    path:'AllCommandes',
    component: CommandesAllComponent
  }
  , {
    path:'',
    component: CommandesAllComponent
  }, {
    path:'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
