import { Component, OnInit } from '@angular/core';
export interface Commande {
  id:number;
   ref:string;
   categorie : string;
   produit:{
     refernce: string;
     nom: string;
     prix:number;
     qtte : number;
   }
}


@Component({
  selector: 'app-commandes-all',
  templateUrl: './commandes-all.component.html',
  styleUrls: ['./commandes-all.component.css']
})
export class CommandesAllComponent implements OnInit {
  constructor() { }
 commandes :Commande[] ;
  ngOnInit(): void {
this.commandes = cmds;
  }
  goToDetallies(id :number){

  }
}





const cmds: Commande[] = [{
  id:1,
  ref:'reference-01',
  categorie : 'web 2.0',
  produit:{
    refernce: "ref-77",
    nom: "Produit 01",
    prix: 22.44,
    qtte : 3
  },
},
{
  id:2,
  ref:'reference-02',
  categorie : 'fashion',
  produit:{
    refernce: "ref-47",
    nom: "Produit 05",
    prix: 25.49,
    qtte : 2
}}];