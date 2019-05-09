import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './models';
import { Observable } from 'rxjs';
import { ShoppingDataService } from './shopping-data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items$: Observable<ShoppingListItem[]>;

  nextId = 3;
  constructor(private apiService: ShoppingDataService) { }

  ngOnInit() {
    this.items$ = this.apiService.getShoppingList();
  }

  onItemAdded(description: string) {

  }

}
