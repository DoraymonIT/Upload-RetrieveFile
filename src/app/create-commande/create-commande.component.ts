import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  saveAndGoToList(){
this.router.navigateByUrl('AllCommandes');
  }
}
