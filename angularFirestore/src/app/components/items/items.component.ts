import { Item } from './../../models/Item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  items:Item[];
  ngOnInit() {
    this.itemService.getItems().subscribe(items=>{
      this.items=items;
      console.log(items);
    }, error =>{
      // console.log(error)
    });
  }

}
