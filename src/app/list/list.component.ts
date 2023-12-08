import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {listProdcut = [
       { id: 1, titre: "T-shirt 1", prix: 18, quantite: 0, aime: 0 },
       { id: 2, 

titre  : "T-shirt 2", 

prix  : 21, 

quantite  : 10, aime: 0 },
       { id: 3, 

titre  : "T-shirt 3", 

prix  : 16, 

quantite  : 8, aime: 0 },
     ]

}
